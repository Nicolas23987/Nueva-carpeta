import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize'; // Necesario para inyectar el modelo
import { CreateSignoVitalDto } from './dto/create-signo_vital.dto';
import { UpdateSignoVitalDto } from './dto/update-signo_vital.dto';
import { SignoVital } from './entities/signo_vital.entity';

@Injectable()
export class SignoVitalService {
  constructor(
    @InjectModel(SignoVital) private signoVitalModel: typeof SignoVital, // Inyectamos el modelo SignoVital
  ) {}

  // Crear un nuevo signo vital
  async create(createSignoVitalDto: CreateSignoVitalDto): Promise<SignoVital> {
    const signoVital = await this.signoVitalModel.create(createSignoVitalDto);
    return signoVital;
  }

  // Obtener todos los signos vitales
  async findAll(): Promise<SignoVital[]> {
    return this.signoVitalModel.findAll();
  }

  // Obtener un signo vital por ID
  async findOne(id: number): Promise<SignoVital> {
    return this.signoVitalModel.findOne({
      where: { id },
    });
  }

  // Actualizar un signo vital por ID
  async update(id: number, updateSignoVitalDto: UpdateSignoVitalDto): Promise<SignoVital> {
    const signoVital = await this.signoVitalModel.findByPk(id);
    if (!signoVital) {
      throw new Error('Signo vital no encontrado');
    }
    return signoVital.update(updateSignoVitalDto);
  }

  // Eliminar un signo vital por ID
  async remove(id: number): Promise<void> {
    const signoVital = await this.signoVitalModel.findByPk(id);
    if (!signoVital) {
      throw new Error('Signo vital no encontrado');
    }
    await signoVital.destroy();
  }
}
