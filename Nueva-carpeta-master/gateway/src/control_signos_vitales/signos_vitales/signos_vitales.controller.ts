import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { CreateSignosVitaleDto } from './dto/create-signos_vitale.dto';
import { UpdateSignosVitaleDto } from './dto/update-signos_vitale.dto';
import { NATS_SERVICE } from 'src/config';
import { ClientProxy } from '@nestjs/microservices';

@Controller('signos-vitales')
export class SignosVitalesController {

  constructor(
    @Inject(NATS_SERVICE)
     private readonly client: ClientProxy, 
  ) {}


  @Post()
  async create(@Body() createSignosVitaleDto: CreateSignosVitaleDto) {
    return this.client.send( {cmd: 'createSignosVitales'}, createSignosVitaleDto); 
  }
  
  @Get()
  async findAll() {
    return this.client.send( {cmd: 'findAllSignosVitales'}, {});
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.client.send( {cmd: 'findOneSignosVitales'}, +id); 
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateSignosVitaleDto: UpdateSignosVitaleDto) {
    return this.client.send( {cmd: 'updateSignosVitales'}, { id: +id, ...updateSignosVitaleDto });
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.client.send( {cmd: 'removeSignosVitales'}, +id); // Enviar el ID al microservicio
  }
}