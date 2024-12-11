import { ControlIdiomaEntity } from "../../entities/control.idioma";
import { ControlIdiomaRepository } from "../../repositories/control.idioma.repositqry";




export interface GetAllContolIdiomaUseCase{
    execute():Promise<ControlIdiomaEntity[]>
}


export class GetAllContolIdioma implements GetAllContolIdiomaUseCase{
    constructor(
        public readonly repository: ControlIdiomaRepository
    ){}

    execute(): Promise<ControlIdiomaEntity[]> {
        return this.repository.getAll();

    }

}