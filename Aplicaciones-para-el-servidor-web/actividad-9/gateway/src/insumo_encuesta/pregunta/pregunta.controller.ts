import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreatePreguntaDto } from './dto/create-pregunta.dto';
import { UpdatePreguntaDto } from './dto/update-pregunta.dto';
import { NATS_SERVICE } from 'src/config';

@Controller('pregunta')
export class PreguntaController {
  
  constructor(
    @Inject(NATS_SERVICE) private readonly client: ClientProxy, // Inyectamos el cliente NATS
  ) {}

  @Post()
  async create(@Body() createPreguntaDto: CreatePreguntaDto) {
    return this.client.send({ cmd: 'createPregunta' }, createPreguntaDto);
  }

  @Get()
  async findAll() {
    return this.client.send({ cmd: 'findAllPregunta' }, {});
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.client.send({ cmd: 'findOnePregunta' }, +id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePreguntaDto: UpdatePreguntaDto) {
    return this.client.send({ cmd: 'updatePregunta' }, {
      id: +id,
      ...updatePreguntaDto,
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.client.send({ cmd: 'removePregunta' }, +id);
  }
}
