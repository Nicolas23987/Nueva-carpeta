import { ControlActivoEntity } from "../../entities/control.departamento";
import { ControlActivoRepository } from "../../repositories/control.departamento.repository";

export interface DeleteControlActivoUseCase {
    execute(id: number): Promise<ControlActivoEntity>;
}

export class DeleteControlActivo implements DeleteControlActivoUseCase {
    constructor(
        private readonly repository: ControlActivoRepository
    ) {}

    execute(id: number): Promise<ControlActivoEntity> {
        return this.repository.deleteById(id);
    }
}
