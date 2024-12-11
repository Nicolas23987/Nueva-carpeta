import { SignoVitalEntity } from "../../entities/signo.vital"
import { SignoVitalRepository } from "../../repositories/signo.vital.repository"



export interface DeleteSignoVitalUseCase {
    execute( id: number ): Promise<SignoVitalEntity>
}


export class DeleteSignoVital implements DeleteSignoVitalUseCase {
    
    constructor(
        private readonly repository: SignoVitalRepository
    ){}


    execute(id: number): Promise<SignoVitalEntity> {
        return this.repository.deleteById(id)
    }
}