import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePacienteInput } from './dto/create-paciente.input';
import { UpdatePacienteInput } from './dto/update-paciente.input';
import { Paciente } from './entities/paciente.entity';

@Injectable()
export class PacienteService {
  constructor(
    @InjectModel(Paciente) private pacienteModel: typeof Paciente,
  ) {}

  async create(createPacienteInput: CreatePacienteInput): Promise<Paciente> {
    const paciente = await this.pacienteModel.create(createPacienteInput);
    return paciente;
  }
  async findAll(): Promise<Paciente[]> {
    return this.pacienteModel.findAll();
  }

  async findOne(id: number): Promise<Paciente> {
    return this.pacienteModel.findOne({
      where: { id },
    });
  }

  async update(id: number, updatePacienteInput: UpdatePacienteInput): Promise<Paciente> {
    const paciente = await this.pacienteModel.findOne({ where: { id } });
    if (!paciente) {
      throw new Error(`Paciente con ID ${id} no encontrado`);
    }
    return paciente.update(updatePacienteInput);
  }

  async remove(id: number): Promise<void> {
    const paciente = await this.pacienteModel.findOne({ where: { id } });
    if (!paciente) {
      throw new Error(`Paciente con ID ${id} no encontrado`);
    }
    await paciente.destroy();
  }
}
