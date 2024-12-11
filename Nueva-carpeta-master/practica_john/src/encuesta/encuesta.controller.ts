import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { EncuestaService } from './encuesta.service';
import { CreateEncuestaDto } from './dto/create-encuesta.dto';
import { UpdateEncuestaDto } from './dto/update-encuesta.dto';

@Controller()
export class EncuestaController {
  constructor(private readonly encuestaService: EncuestaService) {}

  @MessagePattern({cmd:'createEncuesta'})
  create(@Payload() createEncuestaDto: CreateEncuestaDto) {
    return this.encuestaService.create(createEncuestaDto);
  }

  @MessagePattern({cmd:'findAllEncuesta'})
  findAll() {
    return this.encuestaService.findAll();
  }

  @MessagePattern({cmd:'findOneEncuesta'})
  findOne(@Payload() id: number) {
    return this.encuestaService.findById(id);
  }

  @MessagePattern({cmd:'updateEncuesta'})
  update(@Payload() updateEncuestaDto: UpdateEncuestaDto) {
    return this.encuestaService.update(updateEncuestaDto.id, updateEncuestaDto);
  }

  @MessagePattern({cmd:'removeEncuesta'})
  remove(@Payload() id: number) {
    return this.encuestaService.delete(id);
  }
}
