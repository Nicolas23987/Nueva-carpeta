import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateRecetaDto } from './dto/create-receta.dto';
import { UpdateRecetaDto } from './dto/update-receta.dto';
import { Observable } from 'rxjs';
import { NATS_SERVICE } from 'src/config';

@Controller('receta')
export class RecetaController {
  constructor(@Inject(NATS_SERVICE) private readonly client: ClientProxy) {}

  @Post()
  create(@Body() createRecetaDto: CreateRecetaDto): Observable<any> {
    return this.client.send({ cmd: 'createReceta' }, createRecetaDto);
  }

  @Get()
  findAll(): Observable<any> {
    return this.client.send({ cmd: 'findAllReceta' }, {});
  }

  @Get(':id')
  findOne(@Param('id') id: number): Observable<any> {
    return this.client.send({ cmd: 'findOneReceta' }, id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateRecetaDto: UpdateRecetaDto): Observable<any> {
    return this.client.send({ cmd: 'updateReceta' }, { id, ...updateRecetaDto });
  }

  @Delete(':id')
  remove(@Param('id') id: number): Observable<any> {
    return this.client.send({ cmd: 'removeReceta' }, id);
  }
}
