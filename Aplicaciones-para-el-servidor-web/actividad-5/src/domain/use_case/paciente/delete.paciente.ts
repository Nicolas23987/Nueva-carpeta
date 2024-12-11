import { PacienteEntity } from "../../entities/paciente";
import { PacienteRepository } from "../../repositories/paciente.repository";



export interface DeletePacienteUseCase {
    execute( id: number ): Promise<PacienteEntity>
}


export class DeletePaciente implements DeletePacienteUseCase {
    
    constructor(
        private readonly repository: PacienteRepository
    ){}


    execute(id: number): Promise<PacienteEntity> {
        return this.repository.deleteById(id)
    }
}