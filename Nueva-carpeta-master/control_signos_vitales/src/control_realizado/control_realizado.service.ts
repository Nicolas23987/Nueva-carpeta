import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateControlRealizadoDto } from './dto/create-control_realizado.dto';
import { UpdateControlRealizadoDto } from './dto/update-control_realizado.dto';
import { ControlRealizado } from './entities/control_realizado.entity';

@Injectable()
export class ControlRealizadoService {
  constructor(
    @InjectModel(ControlRealizado)
    private readonly controlRealizadoModel: typeof ControlRealizado,
  ) {}

  // Crear un nuevo ControlRealizado
  async create(createControlRealizadoDto: CreateControlRealizadoDto): Promise<ControlRealizado> {
    return await this.controlRealizadoModel.create(createControlRealizadoDto);
  }

  // Obtener todos los controles realizados
  async findAll(): Promise<ControlRealizado[]> {
    return await this.controlRealizadoModel.findAll();
  }

  // Obtener un ControlRealizado por ID
  async findOne(id: number): Promise<ControlRealizado> {
    const controlRealizado = await this.controlRealizadoModel.findOne({ where: { id } });
    if (!controlRealizado) {
      throw new NotFoundException(`Control realizado con id ${id} no encontrado`);
    }
    return controlRealizado;
  }

  // Actualizar un ControlRealizado
  async update(
    id: number,
    updateControlRealizadoDto: UpdateControlRealizadoDto,
  ): Promise<ControlRealizado> {
    const controlRealizado = await this.findOne(id); // Verifica si existe
    // Actualizamos los campos
    await controlRealizado.update(updateControlRealizadoDto);
    return controlRealizado; // Devuelve el registro actualizado
  }

  // Eliminar un ControlRealizado
  async remove(id: number): Promise<void> {
    const controlRealizado = await this.findOne(id); // Verifica si existe
    await controlRealizado.destroy(); // Elimina el registro
  }
}
