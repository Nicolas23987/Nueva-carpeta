// datasource/SignoVitalDatasourceImpl.ts
import SignoVital from '../../data/models/SignoVital';
import { CreateSignoVitalDto, SignoVitalDatasource, SignoVitalEntity, UpdateSignoVitalDto } from '../../domain';

export class SignoVitalDatasourceImpl implements SignoVitalDatasource {
  async create(createSignoVitalDto: CreateSignoVitalDto): Promise<SignoVitalEntity> {
      const signoVital = await SignoVital.create(
        { ...createSignoVitalDto }
      );
      return SignoVitalEntity.fromObject(signoVital.toJSON());
  }

  async getAll(): Promise<SignoVitalEntity[]> {
    try {
      const signosVitales = await SignoVital.findAll();
      return signosVitales.map(signoVital => SignoVitalEntity.fromObject(signoVital.toJSON()));
    } catch (error) {
      console.error("Error al obtener los signos vitales:", error);
      throw new Error('Error al obtener los signos vitales');
    }
  }

  async findById(id: number): Promise<SignoVitalEntity> {
    const signoVital = await SignoVital.findByPk(id);
    if (!signoVital) throw `SignoVital con id ${id} no encontrado`;
    return SignoVitalEntity.fromObject(signoVital.toJSON());
  }

  async updateById(updateSignoVitalDto: UpdateSignoVitalDto): Promise<SignoVitalEntity> {
    const signoVital = await this.findById(updateSignoVitalDto.id);
    await SignoVital.update(updateSignoVitalDto, { where: { id: updateSignoVitalDto.id } });
    return SignoVitalEntity.fromObject(signoVital);
  }

  async deleteById(id: number): Promise<SignoVitalEntity> {
    const signoVital = await this.findById(id);
    await SignoVital.destroy({ where: { id } });
    return SignoVitalEntity.fromObject(signoVital);
  }
}
