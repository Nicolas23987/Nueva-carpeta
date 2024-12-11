import { ControlRealizadoEntity } from "../../entities/control.realizado"
import { ControlRealizadoRepository } from "../../repositories/control.realizado.repository"


export interface GetControlRealizadoUseCase {
    execute ( id: number): Promise<ControlRealizadoEntity>
}




export class GetControlRealizado implements GetControlRealizadoUseCase{
    constructor(
        private readonly repository: ControlRealizadoRepository
    ){}

    execute(id: number): Promise<ControlRealizadoEntity> {
        return this.repository.findById( id )
    }
}