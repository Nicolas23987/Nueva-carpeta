import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ControlDeActivo } from './entities/control-de-activo.entity';
import { CreateControlDeActivoDto } from './dto/create-control-de-activo.dto';
import { UpdateControlDeActivoDto } from './dto/update-control-de-activo.dto';

@Injectable()
export class ControlDeActivoService {
  constructor(
    @InjectRepository(ControlDeActivo)
    private readonly controlDeActivoRepository: Repository<ControlDeActivo>,
  ) { }

  async create(createControlDeActivoDto: CreateControlDeActivoDto): Promise<ControlDeActivo> {
    const controlDeActivo = this.controlDeActivoRepository.create(createControlDeActivoDto);
    return this.controlDeActivoRepository.save(controlDeActivo);
  }

  async findAll(): Promise<ControlDeActivo[]> {
    return this.controlDeActivoRepository.find({
      relations: ['activo', 'departamento'],
    });
  }

  async findOne(id: number): Promise<ControlDeActivo> {
    const activo = this.controlDeActivoRepository.findOne({
      where: { id },
      relations: ['activo', 'departamento'],
    });
    if (!activo) {
      throw new Error(`Control de activo with id ${id} not found.`);
    }
    return activo;
  }

  async update(
    id: number,
    updateControlDeActivoDto: UpdateControlDeActivoDto,
  ): Promise<ControlDeActivo> {
    const control = this.findOne(id);
    const con = await this.controlDeActivoRepository.update(id, updateControlDeActivoDto);
    console.log(con)
    return control; 
  }
  
  async remove(id: number):Promise<ControlDeActivo> {
    const control = this.findOne(id)
    await this.controlDeActivoRepository.delete(id);
    return control; 
  }
}
