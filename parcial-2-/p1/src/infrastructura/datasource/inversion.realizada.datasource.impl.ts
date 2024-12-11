import { DataSource, Repository } from "typeorm";
import { Inversionista } from "../../data/models/Inversionista";
import { ConceptoDeInversion } from "../../data/models/ConceptoDeInversion";
import { InversionRealizada } from "../../data/models/InversionRealizada";
import { CreateInversionRealizadaDto, UpdateInversionRealizadaDto, InversionRealizadaEntity, InversionRealizadaDatasource } from "../../domain";

export class InversionRealizadaDatasourceImpl implements InversionRealizadaDatasource {
  private readonly repository: Repository<InversionRealizada>;

  constructor(dataSource: DataSource) {
    this.repository = dataSource.getRepository(InversionRealizada);
  }

  async create(createInversionRealizada: CreateInversionRealizadaDto): Promise<InversionRealizadaEntity> {
    const inversionistaRepo = this.repository.manager.getRepository(Inversionista);
    const conceptoRepo = this.repository.manager.getRepository(ConceptoDeInversion);

    const inversionista = await inversionistaRepo.findOneBy({ id: createInversionRealizada.id_inversionista });
    const conceptoDeInversion = await conceptoRepo.findOneBy({ id: createInversionRealizada.id_concepto_de_inversion });

    if (!inversionista) throw new Error("No se encontró un inversionista con el ID proporcionado.");
    if (!conceptoDeInversion) throw new Error("No se encontró un concepto de inversión con el ID proporcionado.");

    const nuevaInversion = this.repository.create({
      inversionista,
      conceptoDeInversion,
      valorInversion: createInversionRealizada.valor_inversion,
      fecha: createInversionRealizada.fecha,
      duracionDeInversion: createInversionRealizada.duracion_de_inversion,
    });

    const savedInversion = await this.repository.save(nuevaInversion);
    return InversionRealizadaEntity.fromObject(savedInversion);
  }

  async getAll(): Promise<InversionRealizadaEntity[]> {
    const inversiones = await this.repository.find();
    return inversiones.map((inversion) => InversionRealizadaEntity.fromObject(inversion));
  }

  async findById(id: string): Promise<InversionRealizadaEntity> {
    const inversion = await this.repository.findOne({ where: { id } });
    if (!inversion) throw new Error(`Inversión realizada con el ID ${id} no encontrada.`);
    return InversionRealizadaEntity.fromObject(inversion);
  }

  async updateById(updateInversionRealizadaDto: UpdateInversionRealizadaDto): Promise<InversionRealizadaEntity> {
    const inversion = await this.repository.findOne({ where: { id: updateInversionRealizadaDto.id } });
    if (!inversion) throw new Error(`No se encontró ninguna inversión realizada con el ID ${updateInversionRealizadaDto.id}.`);

    this.repository.merge(inversion, updateInversionRealizadaDto);
    const updatedInversion = await this.repository.save(inversion);
    return InversionRealizadaEntity.fromObject(updatedInversion);
  }

  async deleteById(id: string): Promise<InversionRealizadaEntity> {
    const inversion = await this.repository.findOne({ where: { id } });
    if (!inversion) throw new Error(`La inversión realizada con el ID ${id} no fue encontrada.`);

    await this.repository.remove(inversion);
    return InversionRealizadaEntity.fromObject(inversion);
  }
}
