import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pregunta } from './entities/pregunta.entity';

@Injectable()
export class PreguntaService {
  constructor(
    @InjectRepository(Pregunta)
    private preguntaRepository: Repository<Pregunta>,
  ) {}

  async findAll(): Promise<Pregunta[]> {
    return this.preguntaRepository.find();
  }

  async findById(id: number): Promise<Pregunta> {
    const pregunta = await this.preguntaRepository.findOne({ where: { id } });
    if (!pregunta) {
      throw new NotFoundException(`Pregunta con ID ${id} no encontrada`);
    }
    return pregunta;
  }

  async create(pregunta: Partial<Pregunta>): Promise<Pregunta> {
    const nuevaPregunta = this.preguntaRepository.create(pregunta);
    return this.preguntaRepository.save(nuevaPregunta);
  }

  async update(id: number, pregunta: Partial<Pregunta>): Promise<Pregunta> {
    const preguntaExistente = await this.findById(id);
    const preguntaActualizada = this.preguntaRepository.merge(preguntaExistente, pregunta);
    return this.preguntaRepository.save(preguntaActualizada);
  }

  async delete(id: number): Promise<void> {
    const pregunta = await this.findById(id);
    await this.preguntaRepository.remove(pregunta);
  }
}
