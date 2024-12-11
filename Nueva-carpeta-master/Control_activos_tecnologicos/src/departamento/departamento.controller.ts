import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { DepartamentoService } from './departamento.service';
import { CreateDepartamentoDto } from './dto/create-departamento.dto';
import { UpdateDepartamentoDto } from './dto/update-departamento.dto';

@Controller()
export class DepartamentoController {
  constructor(private readonly departamentoService: DepartamentoService) {}

  @MessagePattern({cmd:'createDepartamento'})
  create(@Payload() createDepartamentoDto: CreateDepartamentoDto) {
    return this.departamentoService.create(createDepartamentoDto);
  }

  @MessagePattern({cmd:'findAllDepartamento'})
  findAll() {
    return this.departamentoService.findAll();
  }

  @MessagePattern({cmd:'findOneDepartamento'})
  findOne(@Payload() id: number) {
    return this.departamentoService.findOne(id);
  }

  @MessagePattern({cmd:'updateDepartamento'})
  update(@Payload() updateDepartamentoDto: UpdateDepartamentoDto) {
    return this.departamentoService.update(updateDepartamentoDto.id, updateDepartamentoDto);
  }

  @MessagePattern({cmd:'removeDepartamento'})
  remove(@Payload() id: number) {
    return this.departamentoService.remove(id);
  }
}
