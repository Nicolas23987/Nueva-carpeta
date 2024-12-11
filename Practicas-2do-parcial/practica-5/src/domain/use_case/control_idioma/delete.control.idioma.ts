import { ControlIdiomaEntity } from "../../entities/control.idioma";
import { ControlIdiomaRepository } from "../../repositories/control.idioma.repositqry";

export interface DeleteControlIdiomaUseCase {
    execute( id: number ): Promise<ControlIdiomaEntity>
}
export class DeleteControlIdioma implements DeleteControlIdiomaUseCase {
    
    constructor(
        private readonly repository: ControlIdiomaRepository
    ){}

    execute(id: number): Promise<ControlIdiomaEntity> {
        return this.repository.deleteById(id)
    }
}