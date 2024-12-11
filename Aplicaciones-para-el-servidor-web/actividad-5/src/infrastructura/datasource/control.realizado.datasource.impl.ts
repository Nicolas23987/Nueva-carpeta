import ControlRealizado from '../../data/models/ControlRealizado';
import Paciente from '../../data/models/Paciente';
import SignoVital from '../../data/models/SignoVital';
import { CreateControlRealizadoDto, ControlRealizadoDatasource, ControlRealizadoEntity, UpdateControlRealizadoDto, CreatePacienteDto, CreateSignoVitalDto } from '../../domain';

export class ControlRealizadoDatasourceImpl implements ControlRealizadoDatasource {
  async create(createControlRealizadoDto: CreateControlRealizadoDto): Promise<ControlRealizadoEntity> {

    const paciente = await Paciente.findByPk(createControlRealizadoDto.id_paciente)
    const signo_vital = await SignoVital.findByPk(createControlRealizadoDto.id_signo_vital)
    if(!paciente) throw 'id del Paciente no es valido';
    if(!signo_vital) throw 'id del signo vital no es valido';

    const controlRealizado = await ControlRealizado.create({
      ...createControlRealizadoDto,
    });
    const data = {
      ...controlRealizado.toJSON(),
      Paciente: { ...paciente.toJSON() },
      SignoVital: { ...signo_vital.toJSON() }
    }
    console.log(data)
    return ControlRealizadoEntity.fromObject(data);
  }

  async getAll(): Promise<ControlRealizadoEntity[]> {
    try {
    
      const controles = await ControlRealizado.findAll({
        include:[
          Paciente,
          SignoVital
        ]
      });
      return controles.map(control => ControlRealizadoEntity.fromObject(control.toJSON()));
    
    } catch (error) {
      
      console.error("Error al obtener los controles realizados:", error);
      throw new Error('Error al obtener los controles realizados');
    
    }
  }

  async findById(id: number): Promise<ControlRealizadoEntity> {
    const controlRealizado = await ControlRealizado.findByPk(id);
    if (!controlRealizado) throw `ControlRealizado con id ${id} no encontrado`;
    return ControlRealizadoEntity.fromObject(controlRealizado.toJSON());
  }

  async updateById(updateControlRealizadoDto: UpdateControlRealizadoDto): Promise<ControlRealizadoEntity> {
    const controlRealizado = await this.findById(updateControlRealizadoDto.id);
    await ControlRealizado.update(updateControlRealizadoDto, { where: { id: updateControlRealizadoDto.id } });
    return ControlRealizadoEntity.fromObject(controlRealizado);
  }

  async deleteById(id: number): Promise<ControlRealizadoEntity> {
    const controlRealizado = await this.findById(id);
    await ControlRealizado.destroy({ where: { id } });
    return ControlRealizadoEntity.fromObject(controlRealizado);
  }
}
