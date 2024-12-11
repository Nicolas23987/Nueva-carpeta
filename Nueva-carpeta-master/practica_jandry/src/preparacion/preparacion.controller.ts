import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PreparacionService } from './preparacion.service';
import { CreatePreparacionDto } from './dto/create-preparacion.dto';
import { UpdatePreparacionDto } from './dto/update-preparacion.dto';

@Controller()
export class PreparacionController {
  constructor(private readonly preparacionService: PreparacionService) {}

  @MessagePattern({cmd:'createPreparacion'})
  create(@Payload() createPreparacionDto: CreatePreparacionDto) {
    return this.preparacionService.create(createPreparacionDto);
  }

  @MessagePattern({cmd:'findAllPreparacion'})
  findAll() {
    return this.preparacionService.findAll();
  }

  @MessagePattern({cmd:'findOnePreparacion'})
  findOne(@Payload() id: number) {
    return this.preparacionService.findOne(id);
  }

  @MessagePattern({cmd:'updatePreparacion'})
  update(@Payload() updatePreparacionDto: UpdatePreparacionDto) {
    return this.preparacionService.update(updatePreparacionDto.id, updatePreparacionDto);
  }

  @MessagePattern({cmd:'removePreparacion'})
  remove(@Payload() id: number) {
    return this.preparacionService.remove(id);
  }
}
