import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ActivoService } from './activo.service';
import { CreateActivoDto } from './dto/create-activo.dto';
import { UpdateActivoDto } from './dto/update-activo.dto';

@Controller()
export class ActivoController {
  constructor(private readonly activoService: ActivoService) {}

  @MessagePattern({cmd: 'create_activo'})
  create(@Payload() createActivoDto: CreateActivoDto) {
    return this.activoService.create(createActivoDto);
  }

  @MessagePattern({cmd:'find_all_activos'})
  findAll() {
    return this.activoService.findAll();
  }

  @MessagePattern({cmd:'find_one_activo'})
  findOne(@Payload() id: number) {
    return this.activoService.findOne(id);
  }

  @MessagePattern({cmd:'update_activo'})
  update(@Payload() updateActivoDto: UpdateActivoDto) {
    return this.activoService.update(updateActivoDto.id, updateActivoDto);
  }

  @MessagePattern({cmd: 'remove_activo'})
  remove(@Payload() id: number) {
    return this.activoService.remove(id);
  }
}
