import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateEncuestaDto } from './dto/create-encuesta.dto';
import { UpdateEncuestaDto } from './dto/update-encuesta.dto';
import { NATS_SERVICE } from 'src/config'; // Aquí debes importar el token para el cliente NATS

@Controller('encuesta')
export class EncuestaController {
  constructor(
    @Inject(NATS_SERVICE) private readonly client: ClientProxy, // Inyectamos el cliente NATS
  ) {}

  @Post()
  async create(@Body() createEncuestaDto: CreateEncuestaDto) {
    return this.client.send({ cmd: 'createEncuesta' }, createEncuestaDto);
  }

  @Get()
  async findAll() {
    return this.client.send({ cmd: 'findAllEncuesta' }, {});
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.client.send({ cmd: 'findOneEncuesta' }, +id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateEncuestaDto: UpdateEncuestaDto) {
    return this.client.send({ cmd: 'updateEncuesta' }, {
      id: +id,
      ...updateEncuestaDto,
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.client.send({ cmd: 'removeEncuesta' }, +id);
  }
}
