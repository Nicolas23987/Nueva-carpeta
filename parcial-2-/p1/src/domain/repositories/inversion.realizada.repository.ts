import { CreateInversionRealizadaDto, UpdateInversionRealizadaDto } from '../dtos/index'
import { InversionRealizadaEntity } from '../entities/inversion.realizada'

export abstract class  InversionRealizadaRepository {

    abstract create( createInversionRealizada: CreateInversionRealizadaDto): Promise<InversionRealizadaEntity>;
    abstract getAll(): Promise<InversionRealizadaEntity[]>;
    abstract findById(id: string): Promise<InversionRealizadaEntity>;
    abstract updateById( updateInversionRealizada: UpdateInversionRealizadaDto): Promise<InversionRealizadaEntity>
    abstract deleteById(id: string): Promise<InversionRealizadaEntity>;

}
