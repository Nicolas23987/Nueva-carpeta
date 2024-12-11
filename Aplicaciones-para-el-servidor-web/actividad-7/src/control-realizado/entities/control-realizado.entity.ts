import { Field, ObjectType } from '@nestjs/graphql';
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
@ObjectType()
export class ControlRealizado extends Model<ControlRealizado> {
  @ForeignKey(() => Paciente)
  @Field()
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  pacienteId: number;
  
  @ForeignKey(() => SignoVital)
  @Field()
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  signoVitalId: number;
  
  @Field()
  @Column({
    type: DataType.DATEONLY,
    allowNull: false,
  })
  fecha: string;
  
  @Field()
  @Column({
    type: DataType.TIME,
    allowNull: false,
  })
  hora: string;
  
  @Field()
  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  valor: number;
  
  @Field()
  @BelongsTo(() => Paciente)
  paciente: Paciente;
  
  @Field()
  @BelongsTo(() => SignoVital)
  signoVital: SignoVital;
}
