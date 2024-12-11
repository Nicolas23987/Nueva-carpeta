import { SignoVitalEntity } from "../../entities/signo.vital";
import { SignoVitalRepository } from "../../repositories/signo.vital.repository";




export interface GetAllSignoVitalesUseCase{
    execute():Promise<SignoVitalEntity[]>
}


export class GetAllSignoVitales implements GetAllSignoVitalesUseCase{
    constructor(
        public readonly repository: SignoVitalRepository
    ){}

    execute(): Promise<SignoVitalEntity[]> {
        return this.repository.getAll();
    }
}