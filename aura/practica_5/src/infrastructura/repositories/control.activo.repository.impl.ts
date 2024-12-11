import { CreateControlActivoDto, ControlActivoEntity, ControlActivoDatasource, UpdateControlActivoDto } from "../../domain";
import { ControlActivoRepository } from "../../domain/repositories/control.activo.repository"; 

export class ControlActivoRepositoryImpl implements ControlActivoRepository {
    constructor(
        private readonly datasource: ControlActivoDatasource
    ) {}

    create(createControlActivoDto: CreateControlActivoDto): Promise<ControlActivoEntity> {
        return this.datasource.create(createControlActivoDto);
    }

    getAll(): Promise<ControlActivoEntity[]> {
        return this.datasource.getAll();
    }

    getById(id: number): Promise<ControlActivoEntity> {
        return this.datasource.getById(id);
    }

    updateById(updateControlActivoDto: UpdateControlActivoDto): Promise<ControlActivoEntity> {
        return this.datasource.updateById(updateControlActivoDto);
    }

    deleteById(id: number): Promise<ControlActivoEntity> {
        return this.datasource.deleteById(id);
    }
}