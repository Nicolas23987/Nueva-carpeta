import { Injectable } from '@nestjs/common';
import { CreateControlActivoDto } from './dto/create-control_activo.dto';
import { UpdateControlActivoDto } from './dto/update-control_activo.dto';

@Injectable()
export class ControlActivosService {
  create(createControlActivoDto: CreateControlActivoDto) {
    return 'This action adds a new controlActivo';
  }

  findAll() {
    return `This action returns all controlActivos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} controlActivo`;
  }

  update(id: number, updateControlActivoDto: UpdateControlActivoDto) {
    return `This action updates a #${id} controlActivo`;
  }

  remove(id: number) {
    return `This action removes a #${id} controlActivo`;
  }
}
