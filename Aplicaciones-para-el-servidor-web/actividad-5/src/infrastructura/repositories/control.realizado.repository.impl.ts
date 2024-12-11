import { CreateControlRealizadoDto, ControlRealizadoEntity, ControlRealizadoDatasource, UpdateControlRealizadoDto } from "../../domain";
import { ControlRealizadoRepository } from "../../domain/repositories/control.realizado.repository"; 

export class ControlRealizadoRepositoryImpl implements ControlRealizadoRepository {
    constructor(
        private readonly datasource: ControlRealizadoDatasource
    ) {}

    create(createControlRealizadoDto: CreateControlRealizadoDto): Promise<ControlRealizadoEntity> {
        return this.datasource.create(createControlRealizadoDto);
    }

    getAll(): Promise<ControlRealizadoEntity[]> {
        return this.datasource.getAll();
    }

    findById(id: number): Promise<ControlRealizadoEntity> {
        return this.datasource.findById(id);
    }

    updateById(updateControlRealizadoDto: UpdateControlRealizadoDto): Promise<ControlRealizadoEntity> {
        return this.datasource.updateById(updateControlRealizadoDto);
    }

    deleteById(id: number): Promise<ControlRealizadoEntity> {
        return this.datasource.deleteById(id);
    }
}
