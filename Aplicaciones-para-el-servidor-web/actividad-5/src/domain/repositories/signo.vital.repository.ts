
import { CreateSignoVitalDto, UpdateSignoVitalDto } from '../dtos/index'
import { SignoVitalEntity } from '../entities/signo.vital'


export abstract class  SignoVitalRepository {

    abstract create( createSignoVital: CreateSignoVitalDto): Promise<SignoVitalEntity>;
    abstract getAll(): Promise<SignoVitalEntity[]>;
    abstract findById(id: number): Promise<SignoVitalEntity>;
    abstract updateById( updateSignoVital: UpdateSignoVitalDto): Promise<SignoVitalEntity>
    abstract deleteById(id: number): Promise<SignoVitalEntity>;

}
