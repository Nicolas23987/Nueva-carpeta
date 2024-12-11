import { Controller, Post, Body, Get, Patch, Param, Delete } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreatePreparacionDto } from './dto/create-preparacion.dto';
import { Observable } from 'rxjs';
import { UpdatePreparacionDto } from './dto/update-preparacion.dto';
import { NATS_SERVICE } from 'src/config';

@Controller('preparacion')
export class PreparacionController {
  constructor(@Inject(NATS_SERVICE) private readonly client: ClientProxy) {}

  @Post()
  create(@Body() createPreparacionDto: CreatePreparacionDto): Observable<any> {
    return this.client.send({ cmd: 'createPreparacion' }, createPreparacionDto);
  }

  @Get()
  findAll(): Observable<any> {
    return this.client.send({ cmd: 'findAllPreparacion' }, {});
  }

  @Get(':id')
  findOne(@Param('id') id: number): Observable<any> {
    return this.client.send({ cmd: 'findOnePreparacion' }, id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updatePreparacionDto: UpdatePreparacionDto): Observable<any> {
    return this.client.send({ cmd: 'updatePreparacion' }, { id, ...updatePreparacionDto });
  }

  @Delete(':id')
  remove(@Param('id') id: number): Observable<any> {
    return this.client.send({ cmd: 'removePreparacion' }, id);
  }
}
