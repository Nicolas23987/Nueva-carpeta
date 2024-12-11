import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateCocineroDto } from './dto/create-cocinero.dto';
import { UpdateCocineroDto } from './dto/update-cocinero.dto';
import { Observable } from 'rxjs';
import { NATS_SERVICE } from 'src/config';

@Controller('cocinero')
export class CocineroController
{
  constructor(@Inject(NATS_SERVICE) private readonly client: ClientProxy) {}

  @Post()
  create(@Body() createCocineroDto: CreateCocineroDto): Observable<any> {
    return this.client.send({ cmd: 'createCocinero' }, createCocineroDto);
  }

  @Get()
  findAll(): Observable<any> {
    return this.client.send({ cmd: 'findAllCocinero' }, {});
  }

  @Get(':id')
  findOne(@Param('id') id: number): Observable<any> {
    return this.client.send({ cmd: 'findOneCocinero' }, id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCocineroDto: UpdateCocineroDto): Observable<any> {
    return this.client.send({ cmd: 'updateCocinero' }, { id, ...updateCocineroDto });
  }

  @Delete(':id')
  remove(@Param('id') id: number): Observable<any> {
    return this.client.send({ cmd: 'removeCocinero' }, id);
  }
}
