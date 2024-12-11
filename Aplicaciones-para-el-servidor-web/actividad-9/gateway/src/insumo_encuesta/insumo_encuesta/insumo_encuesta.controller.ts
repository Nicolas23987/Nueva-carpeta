import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateInsumoEncuestaDto } from './dto/create-insumo_encuesta.dto';
import { UpdateInsumoEncuestaDto } from './dto/update-insumo_encuesta.dto';
import { NATS_SERVICE } from 'src/config'; 

@Controller('insumo-encuesta')
export class InsumoEncuestaController {
  constructor(
    @Inject(NATS_SERVICE) private readonly client: ClientProxy, 
  ) {}

  @Post()
  async create(@Body() createInsumoEncuestaDto: CreateInsumoEncuestaDto) {
    return this.client.send({ cmd: 'createInsumoEncuesta' }, createInsumoEncuestaDto);
  }

  @Get()
  async findAll() {
    return this.client.send({ cmd: 'findAllInsumoEncuesta' }, {});
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.client.send({ cmd: 'findOneInsumoEncuesta' }, +id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateInsumoEncuestaDto: UpdateInsumoEncuestaDto) {
    return this.client.send({ cmd: 'updateInsumoEncuesta' }, {
      id: +id,
      ...updateInsumoEncuestaDto,
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.client.send({ cmd: 'removeInsumoEncuesta' }, +id);
  }
}
