import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePreparacionDto } from './dto/create-preparacion.dto';
import { UpdatePreparacionDto } from './dto/update-preparacion.dto';
import { Preparacion } from './entities/preparacion.entity';

@Injectable()
export class PreparacionService {
  constructor(
    @InjectRepository(Preparacion)
    private readonly preparacionRepository: Repository<Preparacion>, // Usamos el repositorio de TypeORM
  ) {}

  async create(createPreparacionDto: CreatePreparacionDto): Promise<Preparacion> {
    const preparacion = this.preparacionRepository.create(createPreparacionDto); // Crea una nueva entidad
    return this.preparacionRepository.save(preparacion); // Guarda la preparación en la base de datos
  }

  async findAll(): Promise<Preparacion[]> {
    return this.preparacionRepository.find(); // Encuentra todas las preparaciones
  }

  async findOne(id: number): Promise<Preparacion> {
    const preparacion = await this.preparacionRepository.findOne({ where: { id } }); // Encuentra la preparación por id
    if (!preparacion) {
      throw new NotFoundException(`Preparación con id ${id} no encontrada`); // Lanza excepción si no existe
    }
    return preparacion;
  }

  async update(id: number, updatePreparacionDto: UpdatePreparacionDto): Promise<Preparacion> {
    await this.findOne(id); // Verifica si la preparación existe
    await this.preparacionRepository.update(id, updatePreparacionDto); // Actualiza la preparación
    return this.findOne(id); // Retorna la preparación actualizada
  }

  async remove(id: number): Promise<Preparacion> {
    const preparacion = await this.findOne(id); // Verifica si la preparación existe
    await this.preparacionRepository.delete(id); // Elimina la preparación por id
    return preparacion; // Retorna la preparación eliminada
  }
}
