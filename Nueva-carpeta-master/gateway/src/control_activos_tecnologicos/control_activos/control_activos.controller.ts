import { Controller, Post, Get, Patch, Delete, Body, Param, Inject, ParseIntPipe } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { CreateControlActivoDto } from './dto/create-control_activo.dto';
import { UpdateControlActivoDto } from './dto/update-control_activo.dto';
import { NATS_SERVICE } from 'src/config';  // Asegúrate de que esta constante esté definida correctamente
import { firstValueFrom } from 'rxjs';

@Controller('control-activos')
export class ControlActivoController {
  constructor(
    @Inject(NATS_SERVICE) private readonly client: ClientProxy,
  ) {}

  @Post()
  async create(@Body() createControlDeActivoDto: CreateControlActivoDto) {
    try {
      return await firstValueFrom(this.client.send({ cmd: 'createControlActivo' }, createControlDeActivoDto));
    } catch (error) {
      throw new RpcException(error);
    }
  }

  @Get()
  async findAll() {
    try {
      const controlActivos = await firstValueFrom(this.client.send({ cmd: 'findAllControlActivo' }, {}));
      return controlActivos;
    } catch (error) {
      throw new RpcException(error);
    }
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    try {
      return await firstValueFrom(this.client.send({ cmd: 'findOneControlActivo' }, { id }));
    } catch (error) {
      throw new RpcException(error);
    }
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateControlActivoDto: UpdateControlActivoDto
  ) {
    try {
      return await firstValueFrom(this.client.send({ cmd: 'updateControlActivo' }, { id, ...updateControlActivoDto }));
    } catch (error) {
      throw new RpcException(error);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await firstValueFrom(this.client.send({ cmd: 'removeControlActivo' }, { id }));
    } catch (error) {
      throw new RpcException(error);
    }
  }
}
