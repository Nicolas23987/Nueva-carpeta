import { UpdateSignoVitalDto } from "../../dtos";
import { SignoVitalEntity } from "../../entities/signo.vital";
import { SignoVitalRepository } from "../../repositories/signo.vital.repository";



export interface UpdateSignoVitalUseCase {
    execute( dto: UpdateSignoVitalDto):Promise<SignoVitalEntity>
}

export class UpdateSignoVital implements UpdateSignoVitalUseCase{
    constructor(
        public readonly repository: SignoVitalRepository
    ){}

    execute(dto: UpdateSignoVitalDto): Promise<SignoVitalEntity> {
        return this.repository.updateById( dto );
    }
}