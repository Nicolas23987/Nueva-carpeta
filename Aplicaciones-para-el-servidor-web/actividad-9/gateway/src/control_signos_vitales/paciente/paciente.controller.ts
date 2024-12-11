import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { ClientProxy } from '@nestjs/microservices';
import { NATS_SERVICE } from 'src/config';

@Controller('paciente')
export class PacienteController {

  constructor(
    @Inject(NATS_SERVICE)
     private readonly client: ClientProxy, 
  ) {}


  // Crear un paciente (cmd: 'createPaciente'})
  @Post()
  async create(@Body() createPacienteDto: CreatePacienteDto) {
    return this.client.send( {cmd: 'createPaciente'}, createPacienteDto); // Enviar el cmd al microservicio
  }

  // Obtener todos los pacientes (cmd: 'findAllPaciente'})
  @Get()
  async findAll() {
    return this.client.send( {cmd: 'findAllPaciente'}, {});
  }

  // Obtener un paciente por ID (cmd: 'findOnePaciente'})
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.client.send( {cmd: 'findOnePaciente'}, +id); // Enviar el ID al microservicio
  }

  // Actualizar un paciente (cmd: 'updatePaciente'})
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePacienteDto: UpdatePacienteDto) {
    return this.client.send( {cmd: 'updatePaciente'}, { id: +id, ...updatePacienteDto }); // Enviar el ID y datos al microservicio
  }

  // Eliminar un paciente (cmd: 'removePaciente'})
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.client.send( {cmd: 'removePaciente'}, +id); // Enviar el ID al microservicio
  }
}
