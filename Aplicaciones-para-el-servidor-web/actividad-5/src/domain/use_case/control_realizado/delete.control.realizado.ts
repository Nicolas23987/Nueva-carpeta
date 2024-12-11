import { ControlRealizadoEntity } from "../../entities/control.realizado";
import { ControlRealizadoRepository } from "../../repositories/control.realizado.repository";



export interface DeleteControlRealizadoUseCase {
    execute( id: number ): Promise<ControlRealizadoEntity>
}


export class DeleteControlRealizado implements DeleteControlRealizadoUseCase {
    
    constructor(
        private readonly repository: ControlRealizadoRepository
    ){}


    execute(id: number): Promise<ControlRealizadoEntity> {
        return this.repository.deleteById(id)
    }
}