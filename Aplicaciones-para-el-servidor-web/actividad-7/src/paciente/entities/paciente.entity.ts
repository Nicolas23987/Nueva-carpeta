import { Field, ObjectType } from '@nestjs/graphql';
import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'pacientes',
  timestamps: false,
})
@ObjectType()
export class Paciente extends Model<Paciente> {
  @Field()
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nombre: string;
  
  @Field()
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  identificacion: string;
}
