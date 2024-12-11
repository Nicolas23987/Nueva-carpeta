import { Field, ObjectType } from '@nestjs/graphql';
import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'signos_vitales',
  timestamps: false,
})
@ObjectType()
export class SignoVital extends Model<SignoVital> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @Field()
  descripcion: string;
  
  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  @Field()
  nivelMinimo: number;
  
  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  @Field()
  nivelMaximo: number;
}
