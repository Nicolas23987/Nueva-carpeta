import { CreateInversionRealizadaDto, InversionRealizadaEntity, InversionRealizadaDatasource, UpdateInversionRealizadaDto } from "../../domain";
import { InversionRealizadaRepository } from "../../domain/repositories/inversion.realizada.repository"; 

export class InversionRealizadaRepositoryImpl implements InversionRealizadaRepository {
    constructor(
        private readonly datasource: InversionRealizadaDatasource
    ) {}

    create(createInversionRealizadaDto: CreateInversionRealizadaDto): Promise<InversionRealizadaEntity> {
        return this.datasource.create(createInversionRealizadaDto);
    }

    getAll(): Promise<InversionRealizadaEntity[]> {
        return this.datasource.getAll();
    }

    findById(id: string): Promise<InversionRealizadaEntity> {
        return this.datasource.findById(id);
    }

    updateById(updateInversionRealizadaDto: UpdateInversionRealizadaDto): Promise<InversionRealizadaEntity> {
        return this.datasource.updateById(updateInversionRealizadaDto);
    }

    deleteById(id: string): Promise<InversionRealizadaEntity> {
        return this.datasource.deleteById(id);
    }
}
