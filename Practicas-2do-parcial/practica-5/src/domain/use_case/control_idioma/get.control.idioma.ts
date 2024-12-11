import { ControlIdiomaEntity } from "../../entities/control.idioma"
import { ControlIdiomaRepository } from "../../repositories/control.idioma.repositqry"

export interface GetControlIdiomaUseCase {
    execute ( id: number): Promise<ControlIdiomaEntity>
}

export class GetControlIdioma implements GetControlIdiomaUseCase{
    constructor(
        private readonly repository: ControlIdiomaRepository
    ){}

    execute(id: number): Promise<ControlIdiomaEntity> {
        return this.repository.getById( id )
    }
}