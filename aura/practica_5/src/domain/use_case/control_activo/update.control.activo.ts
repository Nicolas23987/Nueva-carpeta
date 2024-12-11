import { UpdateControlActivoDto } from "../../dtos/control.activo/update-control.activo.dto";
import { ControlActivoEntity } from "../../entities/control.activo";
import { ControlActivoRepository } from "../../repositories/control.activo.repository";

export interface UpdateControlActivoUseCase {
    execute(dto: UpdateControlActivoDto): Promise<ControlActivoEntity>;
}

export class UpdateControlActivo implements UpdateControlActivoUseCase {
    constructor(
        public readonly repository: ControlActivoRepository
    ) {}

    execute(dto: UpdateControlActivoDto): Promise<ControlActivoEntity> {
        return this.repository.updateById(dto);
    }
}
