import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'; // Cambiado de InjetModel a InjectRepository
import { Repository } from 'typeorm';
import { CreateCocineroDto } from './dto/create-cocinero.dto';
import { UpdateCocineroDto } from './dto/update-cocinero.dto';
import { Cocinero } from './entities/cocinero.entity';

@Injectable()
export class CocineroService {
  constructor(
    @InjectRepository(Cocinero)
    private readonly cocineroRepository: Repository<Cocinero>, // Inyectamos el repositorio de Cocinero
  ) {}

  async create(createCocineroDto: CreateCocineroDto): Promise<Cocinero> {
    const cocinero = this.cocineroRepository.create(createCocineroDto); // Crea una nueva instancia de Cocinero
    return this.cocineroRepository.save(cocinero); // Guarda la instancia en la base de datos
  }

  async findAll(): Promise<Cocinero[]> {
    return this.cocineroRepository.find(); // Encuentra todos los cocineros
  }

  async findOne(id: number): Promise<Cocinero> {
    const cocinero = await this.cocineroRepository.findOne({ where: { id } }); // Encuentra el cocinero por id
    if (!cocinero) {
      throw new NotFoundException(`Cocinero con id ${id} no encontrado`); // Lanza excepción si no se encuentra
    }
    return cocinero;
  }

  async update(id: number, updateCocineroDto: UpdateCocineroDto): Promise<Cocinero> {
    await this.findOne(id); // Verifica si el cocinero existe
    await this.cocineroRepository.update(id, updateCocineroDto); // Actualiza el cocinero con los nuevos datos
    return this.findOne(id); // Retorna el cocinero actualizado
  }

  async remove(id: number): Promise<Cocinero> {
    const cocinero = await this.findOne(id); // Verifica si el cocinero existe
    await this.cocineroRepository.delete(id); // Elimina el cocinero por id
    return cocinero; // Retorna el cocinero eliminado
  }
}
