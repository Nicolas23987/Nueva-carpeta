import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ControlRealizado } from './entities/control-realizado.entity';
import { UpdateControlRealizadoDto } from './dto/update-control-realizado.dto';
import { CreateControlRealizadoDto } from './dto/create-control-realizado.dto';

@Injectable()
export class ControlRealizadoService {
  constructor(
    @InjectModel(ControlRealizado)
    private readonly controlRealizadoModel: typeof ControlRealizado,
  ) {}

  async create(createControlRealizadoInput: CreateControlRealizadoDto) {
    const control = await this.controlRealizadoModel.create(createControlRealizadoInput);
    return await this.findOne(control.dataValues.id)
  }

  async findAll(): Promise<ControlRealizado[]> {
    return await this.controlRealizadoModel.findAll({
      include: ['paciente' , 'signoVital']      
    });
  }

  async findOne(id: number): Promise<ControlRealizado> {
    const controlRealizado = await this.controlRealizadoModel.findOne({ where: { id },
    include: [ 'paciente', 'signoVital']
   });
    if (!controlRealizado) {
      throw new NotFoundException(`Control realizado con id ${id} no encontrado`);
    }
    return controlRealizado;
  }

  async update(
    id: number,
    updateControlRealizadoInput: UpdateControlRealizadoDto,
  ): Promise<ControlRealizado> {
    const controlRealizado = await this.findOne(id); 
    await controlRealizado.update(updateControlRealizadoInput);
    return controlRealizado; 
  }

  async remove(id: number): Promise<void> {
    const controlRealizado = await this.findOne(id); 
    await controlRealizado.destroy();
  }
}
