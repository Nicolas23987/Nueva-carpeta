import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Estudiante } from './entities/estudiante.entity';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';

@Injectable()
export class EstudianteService {
  constructor(
    @InjectRepository(Estudiante)
    private readonly estudianteRepository: Repository<Estudiante>,
  ) {}

  async create(createEstudianteDto: CreateEstudianteDto): Promise<Estudiante> {
    const estudiante = this.estudianteRepository.create(createEstudianteDto);
    return await this.estudianteRepository.save(estudiante);
  }

  async findAll(): Promise<Estudiante[]> {
    return await this.estudianteRepository.find();
  }

  async findOne(id: number): Promise<Estudiante> {
    return await this.estudianteRepository.findOneBy({ id });
  }

  async update(id: number, updateEstudianteDto: any): Promise<Estudiante> {
    await this.estudianteRepository.update(id, updateEstudianteDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<Estudiante> {
    const estudiante = await this.estudianteRepository.findOneBy({ id });
    if (!estudiante) {
      throw new Error(`Estudiante con id ${id} no encontrado`);
    }
    await this.estudianteRepository.delete(id);
    return estudiante;
  }
  
}
