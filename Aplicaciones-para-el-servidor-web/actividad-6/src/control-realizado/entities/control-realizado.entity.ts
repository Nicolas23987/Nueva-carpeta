import {
    Table,
    Column,
    Model,
    DataType,
    ForeignKey,
    BelongsTo,
  } from 'sequelize-typescript';
import { Paciente } from 'src/paciente/entities/paciente.entity';
import { SignoVital } from 'src/signo-vital/entities/signo-vital.entity';
  
  @Table({
    tableName: 'controles_realizados',
    timestamps: false,
  })
  export class ControlRealizado extends Model<ControlRealizado> {
    @ForeignKey(() => Paciente)
    @Column({
      type: DataType.INTEGER,
      allowNull: false,
    })
    pacienteId: number;
  
    @ForeignKey(() => SignoVital)
    @Column({
      type: DataType.INTEGER,
      allowNull: false,
    })
    signoVitalId: number;
  
    @Column({
      type: DataType.DATEONLY,
      allowNull: false,
    })
    fecha: string;
  
    @Column({
      type: DataType.TIME,
      allowNull: false,
    })
    hora: string;
  
    @Column({
      type: DataType.FLOAT,
      allowNull: false,
    })
    valor: number;
  
    @BelongsTo(() => Paciente)
    paciente: Paciente;
  
    @BelongsTo(() => SignoVital)
    signoVital: SignoVital;
  }
  