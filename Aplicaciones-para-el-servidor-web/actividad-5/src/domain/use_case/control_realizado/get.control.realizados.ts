import { ControlRealizadoEntity } from "../../entities/control.realizado";
import { ControlRealizadoRepository } from "../../repositories/control.realizado.repository";




export interface GetAllContolRealizadoUseCase{
    execute():Promise<ControlRealizadoEntity[]>
}


export class GetAllContolRealizado implements GetAllContolRealizadoUseCase{
    constructor(
        public readonly repository: ControlRealizadoRepository
    ){}

    execute(): Promise<ControlRealizadoEntity[]> {
        return this.repository.getAll();

    }

}