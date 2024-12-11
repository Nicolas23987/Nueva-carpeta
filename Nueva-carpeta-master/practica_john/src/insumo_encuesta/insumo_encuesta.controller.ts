import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateInsumoEncuestaDto } from './dto/create-insumo_encuesta.dto';
import { UpdateInsumoEncuestaDto } from './dto/update-insumo_encuesta.dto';
import { InsumoDeEncuestaService } from './insumo_encuesta.service';

@Controller()
export class InsumoEncuestaController {
  constructor(private readonly insumoEncuestaService: InsumoDeEncuestaService) {}

  @MessagePattern({cmd:'createInsumoEncuesta'})
  create(@Payload() createInsumoEncuestaDto: CreateInsumoEncuestaDto) {
    return this.insumoEncuestaService.create(createInsumoEncuestaDto);
  }

  @MessagePattern({cmd:'findAllInsumoEncuesta'})
  findAll() {
    return this.insumoEncuestaService.findAll();
  }

  @MessagePattern({cmd:'findOneInsumoEncuesta'})
  findOne(@Payload() id: number) {
    return this.insumoEncuestaService.findById(id);
  }

  @MessagePattern({cmd:'updateInsumoEncuesta'})
  update(@Payload() updateInsumoEncuestaDto: UpdateInsumoEncuestaDto) {
    return this.insumoEncuestaService.update(updateInsumoEncuestaDto.id, updateInsumoEncuestaDto);
  }

  @MessagePattern({cmd:'removeInsumoEncuesta'})
  remove(@Payload() id: number) {
    return this.insumoEncuestaService.delete(id);
  }
}
