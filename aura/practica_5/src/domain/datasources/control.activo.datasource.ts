import { CreateControlActivoDto, UpdateControlActivoDto } from '../dtos/index';
import { ControlActivoEntity } from '../entities/control.activo';

export abstract class ControlActivoDatasource {
  abstract create(createControlActivo: CreateControlActivoDto): Promise<ControlActivoEntity>;
  abstract getAll(): Promise<ControlActivoEntity[]>;
  abstract getById(id: number): Promise<ControlActivoEntity>;
  abstract updateById(updateControlActivo: UpdateControlActivoDto): Promise<ControlActivoEntity>;
  abstract deleteById(id: number): Promise<ControlActivoEntity>;
}