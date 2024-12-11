import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ControlRealizadoService } from './control_realizado.service';
import { CreateControlRealizadoDto } from './dto/create-control_realizado.dto';
import { UpdateControlRealizadoDto } from './dto/update-control_realizado.dto';

@Controller()
export class ControlRealizadoController {
  constructor(private readonly controlRealizadoService: ControlRealizadoService) {}

  @MessagePattern({cmd:'createControlRealizado'})
  create(@Payload() createControlRealizadoDto: CreateControlRealizadoDto) {
    return this.controlRealizadoService.create(createControlRealizadoDto);
  }

  @MessagePattern({cmd:'findAllControlRealizado'})
  findAll() {
    return this.controlRealizadoService.findAll();
  }

  @MessagePattern({cmd:'findOneControlRealizado'})
  findOne(@Payload() id: number) {
    return this.controlRealizadoService.findOne(id);
  }

  @MessagePattern({cmd:'updateControlRealizado'})
  update(@Payload() updateControlRealizadoDto: UpdateControlRealizadoDto) {
    return this.controlRealizadoService.update(updateControlRealizadoDto.id, updateControlRealizadoDto);
  }

  @MessagePattern({cmd:'removeControlRealizado'})
  remove(@Payload() id: number) {
    return this.controlRealizadoService.remove(id);
  }
}
