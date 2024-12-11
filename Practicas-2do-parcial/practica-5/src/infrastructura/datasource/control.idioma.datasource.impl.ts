import { Repository } from 'typeorm';
import { ControlIdiomaDatasource, ControlIdiomaEntity, CreateControlIdiomaDto, UpdateControlIdiomaDto } from '../../domain';
import { ControlDeIdioma } from '../../data/models/ControlDeIdioma';
import { Estudiante } from '../../data/models/Estudiante';
import { Idioma } from '../../data/models/Idioma';
import { AppDataSource } from '../../conexion/conexion'; // Asume que AppDataSource está correctamente exportado desde tu archivo de configuración

export class ControlIdiomaDatasourceImpl implements ControlIdiomaDatasource {
  
  private controlRepository: Repository<ControlDeIdioma> = AppDataSource.getRepository(ControlDeIdioma);

  async create(createControlDeIdiomaDto: CreateControlIdiomaDto): Promise<ControlIdiomaEntity> {
    const estudiante = await AppDataSource.getRepository(Estudiante).findOne({ where: { id: createControlDeIdiomaDto.idEstudiante } });
    const idioma = await AppDataSource.getRepository(Idioma).findOne({ where: { id: createControlDeIdiomaDto.idIdioma } });

    if (!estudiante) throw new Error('Id de estudiante no válido');
    if (!idioma) throw new Error('Id de idioma no válido');

    const control = this.controlRepository.create({ estudiante, idioma, ...createControlDeIdiomaDto });
    await this.controlRepository.save(control);

    return ControlIdiomaEntity.fromObject(control);
  }

  async getAll(): Promise<ControlIdiomaEntity[]> {
    try {
      const controls = await this.controlRepository.find({
        relations: ['estudiante', 'idioma'],
      });
      console.log(controls)
      return controls.map(control => ControlIdiomaEntity.fromObject(control));
    } catch (error) {
      throw new Error(`Error al obtener los controles de idioma: ${error}`);
    }
  }

  async getById(id: number): Promise<ControlIdiomaEntity> {
    try {
      const control = await this.controlRepository.findOneOrFail({
        where: { id },
        relations: ['estudiante', 'idioma'], // Relaciones necesarias
      });
      return ControlIdiomaEntity.fromObject(control);
    } catch (error) {
      throw new Error(`Control de idioma con id ${id} no encontrado`);
    }
  }

  async updateById(updateControlIdiomaDto: UpdateControlIdiomaDto): Promise<ControlIdiomaEntity> {
    const control = await this.getById(updateControlIdiomaDto.id);
    Object.assign(control, updateControlIdiomaDto); // Actualizamos las propiedades del control

    await this.controlRepository.save(control);
    return ControlIdiomaEntity.fromObject(control);
  }

  async deleteById(id: number): Promise<ControlIdiomaEntity> {
    const control = await this.controlRepository.findOne({where:{id}});
    if (!control) throw new Error(`Control de idioma con id ${id} no encontrado`);
    await this.controlRepository.remove(control);
    return ControlIdiomaEntity.fromObject(control);
  }
}
