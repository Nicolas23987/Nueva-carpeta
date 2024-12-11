import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Activo } from './entities/activo.entity';
import { CreateActivoDto } from './dto/create-activo.dto';
import { UpdateActivoDto } from './dto/update-activo.dto';

@Injectable()
export class ActivoService {
  constructor(
    @InjectRepository(Activo)
    private readonly activoRepository: Repository<Activo>,
  ) {}

  async create(createActivoDto: CreateActivoDto): Promise<Activo> {
    const activo = this.activoRepository.create(createActivoDto);
    return this.activoRepository.save(activo);
  }

  async findAll(): Promise<Activo[]> {
    return this.activoRepository.find();
  }

  async findOne(id: number): Promise<Activo> {
    const activo = this.activoRepository.findOne({ where: { id } });
    if (!activo) {
      throw new Error(`Activo with id ${id} not found`);
    }
    return activo;
  }

  async update(id: number, updateActivoDto: UpdateActivoDto): Promise<Activo> {
    const activo = this.findOne(id);
    await this.activoRepository.update(id, updateActivoDto);
    return activo;
  }

  async remove(id: number): Promise<Activo> {
    const activo = this.findOne(id);
    await this.activoRepository.delete(id);
    return activo;
  }
}
