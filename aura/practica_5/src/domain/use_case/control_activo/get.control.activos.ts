import { ControlActivoEntity } from "../../entities/control.activo";
import { ControlActivoRepository } from "../../repositories/control.activo.repository";

export interface GetAllControlActivoUseCase {
    execute(): Promise<ControlActivoEntity[]>;
}

export class GetAllControlActivo implements GetAllControlActivoUseCase {
    constructor(
        public readonly repository: ControlActivoRepository
    ) {}

    execute(): Promise<ControlActivoEntity[]> {
        return this.repository.getAll();
    }
}
