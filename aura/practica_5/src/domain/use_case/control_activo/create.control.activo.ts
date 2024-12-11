import { CreateControlActivoDto } from "../../dtos/control-departamento/create-control.departamento.dto";
import { ControlActivoEntity } from "../../entities/control.departamento";
import { ControlActivoRepository } from "../../repositories/control.departamento.repository";

export interface CreateControlActivoUseCase {
    execute(dto: CreateControlActivoDto): Promise<ControlActivoEntity>;
}

export class CreateControlActivo implements CreateControlActivoUseCase {
    constructor(
        public readonly repository: ControlActivoRepository
    ) {}

    execute(dto: CreateControlActivoDto): Promise<ControlActivoEntity> {
        return this.repository.create(dto);
    }
}
