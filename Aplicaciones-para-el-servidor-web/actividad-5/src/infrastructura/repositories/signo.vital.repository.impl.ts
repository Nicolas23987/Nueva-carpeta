import { CreateSignoVitalDto, SignoVitalDatasource, SignoVitalEntity, UpdateSignoVitalDto } from "../../domain";
import { SignoVitalRepository } from "../../domain/repositories/signo.vital.repository";

export class SignoVitalRepositoryImpl implements SignoVitalRepository {
    constructor(
        private readonly datasource: SignoVitalDatasource
    ) {}

    create(createSignoVitalDto: CreateSignoVitalDto): Promise<SignoVitalEntity> {
        return this.datasource.create(createSignoVitalDto);
    }

    getAll(): Promise<SignoVitalEntity[]> {
        return this.datasource.getAll();
    }

    findById(id: number): Promise<SignoVitalEntity> {
        return this.datasource.findById(id);
    }

    updateById(updateSignoVitalDto: UpdateSignoVitalDto): Promise<SignoVitalEntity> {
        return this.datasource.updateById(updateSignoVitalDto);
    }

    deleteById(id: number): Promise<SignoVitalEntity> {
        return this.datasource.deleteById(id);
    }
}
