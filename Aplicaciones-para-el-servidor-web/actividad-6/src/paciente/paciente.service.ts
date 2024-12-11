import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { Paciente } from './entities/paciente.entity';

@Injectable()
export class PacienteService {
  constructor(
    @InjectModel(Paciente) private pacienteModel: typeof Paciente,
  ) {}

  async create(createPacienteDto: CreatePacienteDto): Promise<Paciente> {
    const paciente = await this.pacienteModel.create(createPacienteDto);
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

  async update(id: number, updatePacienteDto: UpdatePacienteDto): Promise<Paciente> {
    const paciente = await this.pacienteModel.findOne({ where: { id } });
    if (!paciente) {
      throw new Error(`Paciente con ID ${id} no encontrado`);
    }
    return paciente.update(updatePacienteDto);
  }

  async remove(id: number): Promise<void> {
    const paciente = await this.pacienteModel.findOne({ where: { id } });
    if (!paciente) {
      throw new Error(`Paciente con ID ${id} no encontrado`);
    }
    await paciente.destroy();
  }
}
