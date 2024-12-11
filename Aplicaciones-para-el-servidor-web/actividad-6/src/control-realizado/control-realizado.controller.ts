import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ControlRealizadoService } from './control-realizado.service';
import { CreateControlRealizadoDto } from './dto/create-control-realizado.dto';
import { UpdateControlRealizadoDto } from './dto/update-control-realizado.dto';

@Controller('control-realizado')
export class ControlRealizadoController {
  constructor(private readonly controlRealizadoService: ControlRealizadoService) {}

  @Post()
  create(@Body() createControlRealizadoDto: CreateControlRealizadoDto) {
    return this.controlRealizadoService.create(createControlRealizadoDto);
  }

  @Get()
  findAll() {
    return this.controlRealizadoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.controlRealizadoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateControlRealizadoDto: UpdateControlRealizadoDto) {
    return this.controlRealizadoService.update(+id, updateControlRealizadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.controlRealizadoService.remove(+id);
  }
}
