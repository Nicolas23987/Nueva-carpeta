import { PacienteEntity } from "../../entities/paciente";
import { PacienteRepository } from "../../repositories/paciente.repository";




export interface GetAllPacientesUseCase{
    execute():Promise<PacienteEntity[]>
}


export class GetAllPacientes implements GetAllPacientesUseCase{
    constructor(
        public readonly repository: PacienteRepository
    ){}

    execute(): Promise<PacienteEntity[]> {
        return this.repository.getAll();
    }
}