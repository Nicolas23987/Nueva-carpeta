import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Usuario } from '../models/Usuario';
import { AppDataSource } from '../database/conexion/ormconfig';



// Función para registrar un nuevo usuario
export const registrarUsuario = async (req: Request, res: Response): Promise<void> => {
    const { nombre, clave } = req.body;

    try {
        const usuarioRepo = AppDataSource.getRepository(Usuario);
        const usuarioExistente = await usuarioRepo.findOne({
            where: { nombre }
        });

        if (usuarioExistente) {
            res.status(400).json({
                status: false,
                mensaje: 'El usuario ya existe'
            });
            return; // Terminamos la función aquí
        }

        // Hash de la clave
        const passwordHash = await bcrypt.hash(clave, 10);

        const nuevoUsuario = usuarioRepo.create({
            nombre,
            clave: passwordHash,
            estado: 'Activo'
        });
        await usuarioRepo.save(nuevoUsuario);

        res.status(201).json({
            status: true,
            mensaje: 'Usuario registrado exitosamente'
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            mensaje: 'Error al registrar el usuario',
            error
        });
    }
};

// Función para iniciar sesión
export const iniciarSesion = async (req: Request, res: Response): Promise<void> => {
    const { nombre, clave } = req.body;

    try {
        const usuarioRepo = AppDataSource.getRepository(Usuario);
        const usuario = await usuarioRepo.findOne({ where: { nombre } });

        if (!usuario) {
            res.status(400).json({
                status: false,
                mensaje: 'Usuario o clave incorrectos'
            });
            return; 
        }

        // Comparación de la clave ingresada con la clave hasheada
        const esValido = await bcrypt.compare(clave, usuario.clave);
        if (!esValido) {
            res.status(400).json({
                status: false,
                mensaje: 'Usuario o clave incorrectos'
            });
            return;
        }

        const payload = {
            id: usuario.id,
            nombre: usuario.nombre
        };

        // Genera el token JWT
        const token = jwt.sign(payload, secretKey, {
            expiresIn: '1h'
        });

        res.json({ token });
    } catch (error) {
        res.status(500).json({
            status: false,
            mensaje: 'Error en el inicio de sesión',
            error
        });
    }
};


