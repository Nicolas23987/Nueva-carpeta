import { Repository } from 'typeorm';
import { ControlActivoDatasource, ControlActivoEntity, CreateControlActivoDto, UpdateControlActivoDto } from '../../domain';
import { ControlDeActivo } from '../../data/models/control.activo';
import { Estudiante } from '../../data/models/activo';
import { Departamento } from '../../data/models/departamento';
import { AppDataSource } from '../../conexion/conexion'; // Asume que AppDataSource está correctamente exportado desde tu archivo de configuración

export class ControlActivoDatasourceImpl implements ControlActivoDatasource {
  
  private controlRepository: Repository<ControlDeActivo> = AppDataSource.getRepository(ControlDeActivo);

  async create(createControlActivoDto: CreateControlActivoDto): Promise<ControlActivoEntity> {
    const activo = await AppDataSource.getRepository(Estudiante).findOne({ where: { id: createControlActivoDto.idEstudiante } });
    const departamento = await AppDataSource.getRepository(Departamento).findOne({ where: { id: createControlActivoDto.idDepartamento } });

    if (!activo) throw new Error('Id de activo no válido');
    if (!departamento) throw new Error('Id de departamento no válido');

    const control = this.controlRepository.create({ activo, departamento, ...createControlActivoDto });
    await this.controlRepository.save(control);

    return ControlActivoEntity.fromObject(control);
  }

  async getAll(): Promise<ControlActivoEntity[]> {
    try {
      const controls = await this.controlRepository.find({
        relations: ['activo', 'departamento'],
      });
      console.log(controls)
      return controls.map(control => ControlActivoEntity.fromObject(control));
    } catch (error) {
      throw new Error(`Error al obtener los controles de activo: ${error}`);
    }
  }

  async getById(id: number): Promise<ControlActivoEntity> {
    try {
      const control = await this.controlRepository.findOneOrFail({
        where: { id },
        relations: ['activo', 'departamento'], // Relaciones necesarias
      });
      return ControlActivoEntity.fromObject(control);
    } catch (error) {
      throw new Error(`Control de activo con id ${id} no encontrado`);
    }
  }

  async updateById(updateControlActivoDto: UpdateControlActivoDto): Promise<ControlActivoEntity> {
    const control = await this.getById(updateControlActivoDto.id);
    Object.assign(control, updateControlActivoDto); // Actualizamos las propiedades del control

    await this.controlRepository.save(control);
    return ControlActivoEntity.fromObject(control);
  }

  async deleteById(id: number): Promise<ControlActivoEntity> {
    const control = await this.controlRepository.findOne({where:{id}});
    if (!control) throw new Error(`Control de activo con id ${id} no encontrado`);
    await this.controlRepository.remove(control);
    return ControlActivoEntity.fromObject(control);
  }
}
