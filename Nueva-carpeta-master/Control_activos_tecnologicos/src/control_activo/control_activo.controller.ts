import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ControlActivoService } from './control_activo.service';
import { CreateControlDeActivoDto } from './dto/create-control_activo.dto';
import { UpdateControlActivoDto } from './dto/update-control_activo.dto';

@Controller()
export class ControlActivoController {
  constructor(private readonly controlActivoService: ControlActivoService) {}

  @MessagePattern({cmd:'createControlActivo'})
  create(@Payload() CreateControlDeActivoDto: CreateControlDeActivoDto) {
    return this.controlActivoService.create(CreateControlDeActivoDto);
  }

  @MessagePattern({cmd:'findAllControlActivo'})
  findAll() {
    return this.controlActivoService.findAll();
  }

  @MessagePattern({cmd:'findOneControlActivo'})
  findOne(@Payload() id: number) {
    return this.controlActivoService.findOne(id);
  }

  @MessagePattern({cmd:'updateControlActivo'})
  update(@Payload() updateControlActivoDto: UpdateControlActivoDto) {
    return this.controlActivoService.update(updateControlActivoDto.id, updateControlActivoDto);
  }

  @MessagePattern({cmd:'removeControlActivo'})
  remove(@Payload() id: number) {
    return this.controlActivoService.remove(id);
  }
}
