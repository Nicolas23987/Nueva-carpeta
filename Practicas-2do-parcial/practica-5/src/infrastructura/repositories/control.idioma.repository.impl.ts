import { CreateControlIdiomaDto, ControlIdiomaEntity, ControlIdiomaDatasource, UpdateControlIdiomaDto } from "../../domain";
import { ControlIdiomaRepository } from "../../domain/repositories/control.idioma.repositqry"; 

export class ControlIdiomaRepositoryImpl implements ControlIdiomaRepository {
    constructor(
        private readonly datasource: ControlIdiomaDatasource
    ) {}

    create(createControlIdiomaDto: CreateControlIdiomaDto): Promise<ControlIdiomaEntity> {
        return this.datasource.create(createControlIdiomaDto);
    }

    getAll(): Promise<ControlIdiomaEntity[]> {
        return this.datasource.getAll();
    }

    getById(id: number): Promise<ControlIdiomaEntity> {
        return this.datasource.getById(id);
    }

    updateById(updateControlIdiomaDto: UpdateControlIdiomaDto): Promise<ControlIdiomaEntity> {
        return this.datasource.updateById(updateControlIdiomaDto);
    }

    deleteById(id: number): Promise<ControlIdiomaEntity> {
        return this.datasource.deleteById(id);
    }
}
