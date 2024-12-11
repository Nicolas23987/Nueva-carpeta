import { InsumoDeEncuesta } from 'src/insumo_encuesta/entities/insumo_encuesta.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Encuesta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  descripcion: string;

  @OneToMany(() => InsumoDeEncuesta, insumo => insumo.encuesta)
  insumos: InsumoDeEncuesta[];
}
