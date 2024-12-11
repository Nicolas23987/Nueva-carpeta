import { CreateSignoVitalDto } from "../../dtos";
import { SignoVitalEntity } from "../../entities/signo.vital";
import { SignoVitalRepository } from "../../repositories/signo.vital.repository";



export interface CreateSignoVitalUseCase {
    execute( dto: CreateSignoVitalDto):Promise<SignoVitalEntity>
}

export class CreateSignoVital implements CreateSignoVitalUseCase{
    constructor(
        public readonly repository: SignoVitalRepository
    ){}

    execute(dto: CreateSignoVitalDto): Promise<SignoVitalEntity> {
        return this.repository.create( dto );
    }
}