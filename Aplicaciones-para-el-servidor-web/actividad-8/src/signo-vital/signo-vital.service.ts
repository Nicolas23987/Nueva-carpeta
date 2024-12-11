import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize'; // Necesario para inyectar el modelo
import { UpdateSignoVitalDto } from './dto/update-signo-vital.dto';
import { SignoVital } from './entities/signo-vital.entity';
import { CreateSignoVitalDto } from './dto/create-signo-vital.dto';

@Injectable()
export class SignoVitalService {
  constructor(
    @InjectModel(SignoVital) private signoVitalModel: typeof SignoVital, 
  ) {}

  async create(createSignoVitalDto: CreateSignoVitalDto): Promise<SignoVital> {
    const signoVital = await this.signoVitalModel.create(createSignoVitalDto);
    return signoVital;
  }

  async findAll(): Promise<SignoVital[]> {
    return this.signoVitalModel.findAll();
  }

  async findOne(id: number): Promise<SignoVital> {
    return this.signoVitalModel.findOne({
      where: { id },
    });
  }

  async update(id: number, updateSignoVitalDto: UpdateSignoVitalDto): Promise<SignoVital> {
    const signoVital = await this.signoVitalModel.findByPk(id);
    if (!signoVital) {
      throw new Error('Signo vital no encontrado');
    }
    return signoVital.update(updateSignoVitalDto);
  }

  async remove(id: number): Promise<void> {
    const signoVital = await this.signoVitalModel.findByPk(id);
    if (!signoVital) {
      throw new Error('Signo vital no encontrado');
    }
    await signoVital.destroy();
  }
}