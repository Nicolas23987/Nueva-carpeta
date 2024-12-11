import { CreateControlIdiomaDto } from "../../dtos/control idioma/create-control.idioma.dto";
import { ControlIdiomaEntity } from "../../entities/control.idioma";
import { ControlIdiomaRepository } from "../../repositories/control.idioma.repositqry";

export interface CreateControlIdiomaUseCase {
    execute( dto: CreateControlIdiomaDto):Promise<ControlIdiomaEntity>
}

export class CreateControlIdioma implements CreateControlIdiomaUseCase{
    constructor(
        public readonly repository: ControlIdiomaRepository
    ){}
    execute(dto: CreateControlIdiomaDto): Promise<ControlIdiomaEntity> {
        return this.repository.create( dto );
    }

}