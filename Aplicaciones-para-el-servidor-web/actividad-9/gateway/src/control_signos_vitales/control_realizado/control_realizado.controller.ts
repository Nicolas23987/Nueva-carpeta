import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateControlRealizadoDto } from './dto/create-control_realizado.dto';
import { UpdateControlRealizadoDto } from './dto/update-control_realizado.dto';
import { NATS_SERVICE } from 'src/config';

@Controller('control-realizado')
export class ControlRealizadoController {
  
  constructor(
    @Inject(NATS_SERVICE) private readonly client: ClientProxy, // Inyectamos el cliente NATS
  ) {}

  // Crear Control Realizado
  @Post()
  async create(@Body() createControlRealizadoDto: CreateControlRealizadoDto) {
    return this.client.send({ cmd:'createControlRealizado'}, createControlRealizadoDto);
  }

  // Obtener todos los controles realizados
  @Get()
  async findAll() {
    console.log('ghola')
    return this.client.send({ cmd:'findAllControlRealizado'}, {});
  }

  // Obtener Control Realizado por ID
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.client.send({ cmd:'findOneControlRealizado'}, +id);
  }

  // Actualizar Control Realizado
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateControlRealizadoDto: UpdateControlRealizadoDto) {
    return this.client.send({ cmd:'updateControlRealizado'}, {
      id: +id,
      ...updateControlRealizadoDto,
    });
  }

  // Eliminar Control Realizado
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.client.send({ cmd:'removeControlRealizado'}, +id);
  }
}
