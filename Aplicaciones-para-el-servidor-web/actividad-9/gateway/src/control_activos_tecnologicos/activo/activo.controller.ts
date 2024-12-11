import { Controller, Get, Post, Body, Patch, Param, Delete, Inject, ParseIntPipe } from '@nestjs/common';
import { CreateActivoDto } from './dto/create-activo.dto';
import { UpdateActivoDto } from './dto/update-activo.dto';
import { NATS_SERVICE } from 'src/config'; // Este es el token donde está registrado el cliente NATS
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { catchError, firstValueFrom } from 'rxjs';
import { PaginationDto } from 'src/common'; // DTO para la paginación

@Controller('activos') // Definimos la ruta para activos
export class ActivoController {
  constructor(
    @Inject(NATS_SERVICE) private readonly client: ClientProxy, // Inyectamos el cliente NATS
  ) {}

  // Método para crear un activo
  @Post()
  create(@Body() createActivoDto: CreateActivoDto) {
    return this.client.send(
      { cmd: 'create_activo' }, // Comando para el microservicio de activos
      createActivoDto, 
    );
  }

  // Método para obtener todos los activos con paginación
  @Get()
  async findAll(@Body() paginationDto: PaginationDto) {
    try {
      const activos = await firstValueFrom(this.client.send({ cmd: 'find_all_activos' }, paginationDto));
      return activos;
    } catch (error) {
      throw new RpcException(error); 
    }
  }

  // Método para obtener un activo por ID
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.client.send({ cmd: 'find_one_activo' }, { id }).pipe(
      catchError((error) => {
        throw new RpcException(error); // Manejo de errores
      })
    );
  }

  // Método para actualizar un activo
  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateActivoDto: UpdateActivoDto) {
    return this.client
      .send(
        { cmd: 'update_activo' },
        {
          id,
          ...updateActivoDto,
        },
      )
      .pipe(
        catchError((err) => {
          throw new RpcException(err); // Manejo de errores
        }),
      );
  }

  // Método para eliminar un activo por ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.client.send({ cmd: 'remove_activo' }, { id }).pipe(
      catchError((error) => {
        throw new RpcException(error); // Manejo de errores
      })
    );
  }
}
