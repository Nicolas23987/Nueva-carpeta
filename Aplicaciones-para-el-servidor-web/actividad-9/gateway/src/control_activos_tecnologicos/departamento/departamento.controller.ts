import { Controller, Post, Get, Patch, Delete, Body, Param, Inject, ParseIntPipe } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { CreateDepartamentoDto } from './dto/create-departamento.dto';
import { UpdateDepartamentoDto } from './dto/update-departamento.dto';
import { NATS_SERVICE } from 'src/config';  // Asegúrate de que esta constante esté definida correctamente
import { firstValueFrom } from 'rxjs';

@Controller('departamentos')
export class DepartamentoController {
  constructor(
    @Inject(NATS_SERVICE) private readonly client: ClientProxy,
  ) {}

  @Post()
  async create(@Body() createDepartamentoDto: CreateDepartamentoDto) {
    try {
      return await firstValueFrom(this.client.send({ cmd: 'createDepartamento' }, createDepartamentoDto));
    } catch (error) {
      throw new RpcException(error);
    }
  }

  @Get()
  async findAll() {
    try {
      const departamentos = await firstValueFrom(this.client.send({ cmd: 'findAllDepartamento' }, {}));
      return departamentos;
    } catch (error) {
      throw new RpcException(error);
    }
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    try {
      return await firstValueFrom(this.client.send({ cmd: 'findOneDepartamento' }, { id }));
    } catch (error) {
      throw new RpcException(error);
    }
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDepartamentoDto: UpdateDepartamentoDto
  ) {
    try {
      return await firstValueFrom(this.client.send({ cmd: 'updateDepartamento' }, { id, ...updateDepartamentoDto }));
    } catch (error) {
      throw new RpcException(error);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await firstValueFrom(this.client.send({ cmd: 'removeDepartamento' }, { id }));
    } catch (error) {
      throw new RpcException(error);
    }
  }
}
