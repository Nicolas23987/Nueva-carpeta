import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ControlIdiomaService } from './control_idioma.service';
import { CreateControlIdiomaDto } from './dto/create-control_idioma.dto';
import { UpdateControlIdiomaDto } from './dto/update-control_idioma.dto';

@Controller('control-idioma')
export class ControlIdiomaController {
  constructor(private readonly controlIdiomaService: ControlIdiomaService) {}

  @Post()
  create(@Body() createControlIdiomaDto: CreateControlIdiomaDto) {
    return this.controlIdiomaService.create(createControlIdiomaDto);
  }

  @Get()
  findAll() {
    return this.controlIdiomaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.controlIdiomaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateControlIdiomaDto: UpdateControlIdiomaDto) {
    return this.controlIdiomaService.update(+id, updateControlIdiomaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.controlIdiomaService.remove(+id);
  }
}
