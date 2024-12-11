import { UpdateControlIdiomaDto } from "../../dtos/control idioma/update-control.idioma.dto";
import { ControlIdiomaEntity } from "../../entities/control.idioma";
import { ControlIdiomaRepository } from "../../repositories/control.idioma.repositqry";

export interface UpdateControlIdiomaUseCase {
    execute( dto: UpdateControlIdiomaDto):Promise<ControlIdiomaEntity>
}

export class UpdateControlIdioma implements UpdateControlIdiomaUseCase{
    constructor(
        public readonly repository: ControlIdiomaRepository
    ){}

    execute(dto: UpdateControlIdiomaDto): Promise<ControlIdiomaEntity> {
        return this.repository.updateById( dto );
    }
}