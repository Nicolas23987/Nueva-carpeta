import { ControlActivoEntity } from "../../entities/control.activo";
import { ControlActivoRepository } from "../../repositories/control.activo.repository";

export interface GetControlActivoUseCase {
    execute(id: number): Promise<ControlActivoEntity>;
}

export class GetControlActivo implements GetControlActivoUseCase {
    constructor(
        private readonly repository: ControlActivoRepository
    ) {}

    execute(id: number): Promise<ControlActivoEntity> {
        return this.repository.getById(id);
    }
}
