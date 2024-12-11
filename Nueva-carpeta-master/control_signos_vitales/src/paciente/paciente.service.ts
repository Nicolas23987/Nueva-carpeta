import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize'; // Necesario para inyectar el modelo
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { Paciente } from './entities/paciente.entity';

@Injectable()
export class PacienteService {
  constructor(
    @InjectModel(Paciente) private pacienteModel: typeof Paciente, // Inyectamos el modelo Paciente
  ) {}

  // Crear un nuevo paciente
  async create(createPacienteDto: CreatePacienteDto): Promise<Paciente> {
    const paciente = await this.pacienteModel.create(createPacienteDto);
    return paciente;
  }

  // Obtener todos los pacientes
  async findAll(): Promise<Paciente[]> {
    return this.pacienteModel.findAll();
  }

  // Obtener un paciente por ID
  async findOne(id: number): Promise<Paciente> {
    return this.pacienteModel.findOne({
      where: { id },
    });
  }

  // Actualizar un paciente por ID
  async update(id: number, updatePacienteDto: UpdatePacienteDto): Promise<Paciente> {
    const paciente = await this.pacienteModel.findByPk(id);
    if (!paciente) {
      throw new Error('Paciente no encontrado');
    }
    return paciente.update(updatePacienteDto);
  }

  // Eliminar un paciente por ID
  async remove(id: number): Promise<void> {
    const paciente = await this.pacienteModel.findByPk(id);
    if (!paciente) {
      throw new Error('Paciente no encontrado');
    }
    await paciente.destroy();
  }
}
