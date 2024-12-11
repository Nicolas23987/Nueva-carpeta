import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Departamento } from './entities/departamento.entity';
import { CreateDepartamentoDto } from './dto/create-departamento.dto';
import { UpdateDepartamentoDto } from './dto/update-departamento.dto';

@Injectable()
export class DepartamentoService {
  constructor(
    @InjectRepository(Departamento)
    private readonly departamentoRepository: Repository<Departamento>,
  ) { }

  async create(createDepartamentoDto: CreateDepartamentoDto): Promise<Departamento> {
    const departamento = this.departamentoRepository.create(createDepartamentoDto);
    return this.departamentoRepository.save(departamento);
  }

  async findAll(): Promise<Departamento[]> {
    return this.departamentoRepository.find();
  }

  async findOne(id: number): Promise<Departamento> {
    const departamento = this.departamentoRepository.findOne({ where: { id } });
    if (!departamento) {
      throw new Error(`Departamento with id ${id} not found.`);
    }
    return departamento;
  }

  async update(
    id: number,
    updateDepartamentoDto: UpdateDepartamentoDto,
  ): Promise<Departamento> {
    const departamento = await this.departamentoRepository.preload({id, ...updateDepartamentoDto});
    if (!departamento) {
      throw new Error('Departamento not found');
    }
    await this.departamentoRepository.save(departamento);
    return departamento;
  }

  async remove(id: number): Promise<Departamento> {
    const departamento = this.findOne(id);
    await this.departamentoRepository.delete(id);
    return departamento;
  }
}
