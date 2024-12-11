import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ControlIdioma } from './entities/control_idioma.entity';
import { CreateControlIdiomaDto } from './dto/create-control_idioma.dto';

@Injectable()
export class ControlIdiomaService {
  constructor( 
    @InjectRepository(ControlIdioma)
    private readonly controlRepository: Repository<ControlIdioma>,
  ) {}

  async create(createControlDeIdiomaDto: CreateControlIdiomaDto): Promise<ControlIdioma> {
    const control = this.controlRepository.create(createControlDeIdiomaDto);
    return await this.controlRepository.save(control);
  }

  async findAll(): Promise<ControlIdioma[]> {
    return await this.controlRepository.find({ relations: ['estudiante', 'idioma'] });
  }

  async findOne(id: number): Promise<ControlIdioma> {
    return await this.controlRepository.findOne({
      where: { id },
      relations: ['estudiante', 'idioma'],
    });
  }

  async update(id: number, updateControlDeIdiomaDto: any): Promise<ControlIdioma> {
    await this.controlRepository.update(id, updateControlDeIdiomaDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<ControlIdioma> {
    const control = await this.controlRepository.findOne({
      where: { id },
      relations: ['estudiante', 'idioma'],
    });
    if (!control) {
      throw new Error(`Control de idioma con id ${id} no encontrado`);
    }
    await this.controlRepository.delete(id);
    return control;
  }
  
}
