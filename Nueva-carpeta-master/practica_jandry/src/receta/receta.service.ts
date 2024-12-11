import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRecetaDto } from './dto/create-receta.dto';
import { UpdateRecetaDto } from './dto/update-receta.dto';
import { Receta } from './entities/receta.entity';

@Injectable()
export class RecetaService {
  constructor(
    @InjectRepository(Receta)
    private readonly recetaRepository: Repository<Receta>, // Usamos el repositorio de TypeORM
  ) {}

  async create(createRecetaDto: CreateRecetaDto): Promise<Receta> {
    const receta = this.recetaRepository.create(createRecetaDto); // Crea una nueva entidad
    return this.recetaRepository.save(receta); // Guarda la receta en la base de datos
  }

  async findAll(): Promise<Receta[]> {
    return this.recetaRepository.find(); // Encuentra todas las recetas
  }

  async findOne(id: number): Promise<Receta> {
    const receta = await this.recetaRepository.findOne({ where: { id } }); // Encuentra la receta por id
    if (!receta) {
      throw new NotFoundException(`Receta con id ${id} no encontrada`); // Lanza excepción si no existe
    }
    return receta;
  }

  async update(id: number, updateRecetaDto: UpdateRecetaDto): Promise<Receta> {
    const receta = await this.findOne(id); // Verifica si la receta existe
    await this.recetaRepository.update(id, updateRecetaDto);
    return this.findOne(id); // Retorna la receta actualizada
  }

  async remove(id: number): Promise<Receta> {
    const receta = await this.findOne(id); // Verifica si la receta existe
    await this.recetaRepository.delete(id); // Elimina la receta por id
    return receta; // Retorna la receta eliminada
  }
}
