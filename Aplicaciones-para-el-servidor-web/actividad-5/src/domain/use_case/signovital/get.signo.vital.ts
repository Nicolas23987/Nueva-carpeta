import { SignoVitalEntity } from "../../entities/signo.vital";
import { SignoVitalRepository } from "../../repositories/signo.vital.repository";


export interface GetSignoVitalUseCase {
    execute ( id: number): Promise<SignoVitalEntity>
}


export class GetSignoVital implements GetSignoVitalUseCase{
    constructor(
        private readonly repository: SignoVitalRepository
    ){}

    execute(id: number): Promise<SignoVitalEntity> {
        return this.repository.findById( id )
    }
}