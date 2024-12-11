import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ControlDeActivoService } from './control-de-activo.service';
import { CreateControlDeActivoDto } from './dto/create-control-de-activo.dto';
import { UpdateControlDeActivoDto } from './dto/update-control-de-activo.dto';

@Controller('control-de-activo')
export class ControlDeActivoController {
  constructor(private readonly controlDeActivoService: ControlDeActivoService) {}

  @Post()
  create(@Body() createControlDeActivoDto: CreateControlDeActivoDto) {
    return this.controlDeActivoService.create(createControlDeActivoDto);
  }

  @Get()
  findAll() {
    return this.controlDeActivoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.controlDeActivoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateControlDeActivoDto: UpdateControlDeActivoDto) {
    return this.controlDeActivoService.update(+id, updateControlDeActivoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.controlDeActivoService.remove(+id);
  }
}
