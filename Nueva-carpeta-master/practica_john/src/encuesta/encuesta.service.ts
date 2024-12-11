import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Encuesta } from './entities/encuesta.entity';

@Injectable()
export class EncuestaService {
  constructor(
    @InjectRepository(Encuesta)
    private encuestaRepository: Repository<Encuesta>,
  ) {}

  async findAll(): Promise<Encuesta[]> {
    return this.encuestaRepository.find();
  }

  async findById(id: number): Promise<Encuesta> {
    const encuesta = await this.encuestaRepository.findOne({ where: { id } });
    if (!encuesta) {
      throw new NotFoundException(`Encuesta con ID ${id} no encontrada`);
    }
    return encuesta;
  }

  async create(encuesta: Partial<Encuesta>): Promise<Encuesta> {
    const nuevaEncuesta = this.encuestaRepository.create(encuesta);
    return this.encuestaRepository.save(nuevaEncuesta);
  }

  async update(id: number, encuesta: Partial<Encuesta>): Promise<Encuesta> {
    const encuestaExistente = await this.findById(id);
    const encuestaActualizada = this.encuestaRepository.merge(encuestaExistente, encuesta);
    return this.encuestaRepository.save(encuestaActualizada);
  }

  async delete(id: number): Promise<void> {
    const encuesta = await this.findById(id);
    await this.encuestaRepository.remove(encuesta);
  }
}
