import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InsumoDeEncuesta } from './entities/insumo_encuesta.entity';

@Injectable()
export class InsumoDeEncuestaService {
  
  constructor(
    @InjectRepository(InsumoDeEncuesta)
    private insumoRepository: Repository<InsumoDeEncuesta>,
  ) {}

  async findAll(): Promise<InsumoDeEncuesta[]> {
    return this.insumoRepository.find({
      relations: ['encuesta', 'pregunta'], // Relaciona Encuesta y Pregunta
    });
  }

  async findById(id: number): Promise<InsumoDeEncuesta> {
    const insumo = await this.insumoRepository.findOne({
      where: { id },
      relations: ['encuesta', 'pregunta'],
    });
    if (!insumo) {
      throw new NotFoundException(`Insumo de Encuesta con ID ${id} no encontrado`);
    }
    return insumo;
  }

  async create(insumo: Partial<InsumoDeEncuesta>): Promise<InsumoDeEncuesta> {
    const nuevoInsumo = this.insumoRepository.create(insumo);
    return this.insumoRepository.save(nuevoInsumo);
  }

  async update(id: number, insumo: Partial<InsumoDeEncuesta>): Promise<InsumoDeEncuesta> {
    const insumoExistente = await this.findById(id);
    const insumoActualizado = this.insumoRepository.merge(insumoExistente, insumo);
    return this.insumoRepository.save(insumoActualizado);
  }

  async delete(id: number): Promise<void> {
    const insumo = await this.findById(id);
    await this.insumoRepository.remove(insumo);
  }
}
