// datasource/PacienteDatasourceImpl.ts
import Paciente from '../../data/models/Paciente'; 
import { CreatePacienteDto, PacienteDatasource, PacienteEntity, UpdatePacienteDto } from '../../domain';

export class PacienteDatasourceImpl implements PacienteDatasource {
  async create(createPacienteDto: CreatePacienteDto): Promise<PacienteEntity> {
    const paciente = await Paciente.create({
        ...createPacienteDto
    });
    return PacienteEntity.fromObject(paciente.toJSON());
  }

  async getAll(): Promise<PacienteEntity[]> {
    try {
      const pacientes = await Paciente.findAll();
      return pacientes.map(paciente => PacienteEntity.fromObject(paciente.toJSON()));
    } catch (error) {
      console.error("Error al obtener los pacientes:", error);
      throw new Error('Error al obtener los pacientes');
    }
  }

  async findById(id: number): Promise<PacienteEntity> {
    const paciente = await Paciente.findByPk(id);
    if (!paciente) throw `Paciente con id ${id} no encontrado`;
    return PacienteEntity.fromObject(paciente.toJSON());
  }

  async updateById(updatePacienteDto: UpdatePacienteDto): Promise<PacienteEntity> {
    const paciente = await this.findById(updatePacienteDto.id);
    await Paciente.update(updatePacienteDto, { where: { id: updatePacienteDto.id } });
    return PacienteEntity.fromObject(paciente);
  }

  async deleteById(id: number): Promise<PacienteEntity> {
    const paciente = await this.findById(id);
    await Paciente.destroy({ where: { id } });
    return PacienteEntity.fromObject(paciente);
  }
}
