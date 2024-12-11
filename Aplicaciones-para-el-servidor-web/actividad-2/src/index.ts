
import express, { Request, Response, NextFunction } from 'express';
import sequelize from './conexion/conexion'; 
const app = express();

app.use(async (req: Request, res: Response, next: NextFunction) => {
    try {
        await sequelize.authenticate();
        // await sequelize.sync({ force: true }); 
        console.log('Conectado a la base de datos y tablas creadas/actualizadas.');
        next();
    } catch (error) {
        console.error('No se pudo conectar a la base de datos:', error);
        res.status(500).send({ 
            error: 'Error de conexión a la base de datos' 
        });
    }
});

app.use(express.json());

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ 
        status: false, 
        message: 'Error interno del servidor' 
    });
});

export default app;
