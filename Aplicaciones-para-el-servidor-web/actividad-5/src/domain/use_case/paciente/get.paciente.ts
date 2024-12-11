import { PacienteEntity } from "../../entities/paciente";
import { PacienteRepository } from "../../repositories/paciente.repository";


export interface GetPacienteUseCase {
    execute ( id: number): Promise<PacienteEntity>
}




export class GetPaciente implements GetPacienteUseCase{
    constructor(
        private readonly repository: PacienteRepository
    ){}

    execute(id: number): Promise<PacienteEntity> {
        return this.repository.findById( id )
    }
}