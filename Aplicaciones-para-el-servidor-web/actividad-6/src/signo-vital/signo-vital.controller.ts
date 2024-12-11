import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SignoVitalService } from './signo-vital.service';
import { CreateSignoVitalDto } from './dto/create-signo-vital.dto';
import { UpdateSignoVitalDto } from './dto/update-signo-vital.dto';

@Controller('signo-vital')
export class SignoVitalController {
  constructor(private readonly signoVitalService: SignoVitalService) {}

  @Post()
  create(@Body() createSignoVitalDto: CreateSignoVitalDto) {
    return this.signoVitalService.create(createSignoVitalDto);
  }

  @Get()
  findAll() {
    return this.signoVitalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.signoVitalService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSignoVitalDto: UpdateSignoVitalDto) {
    return this.signoVitalService.update(+id, updateSignoVitalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.signoVitalService.remove(+id);
  }
}
