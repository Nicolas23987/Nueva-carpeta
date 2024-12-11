import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'signos_vitales',
  timestamps: false,
})
export class SignoVital extends Model<SignoVital> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  descripcion: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  nivelMinimo: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  nivelMaximo: number;
}
