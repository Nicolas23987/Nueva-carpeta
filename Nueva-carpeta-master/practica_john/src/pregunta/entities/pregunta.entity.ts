import { InsumoDeEncuesta } from 'src/insumo_encuesta/entities/insumo_encuesta.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Pregunta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  pregunta: string;

  @Column({ type: 'boolean', default: false })
  campoAmplio: boolean;

  @Column({ type: 'text' })
  tipoDePregunta: string;

  @OneToMany(() => InsumoDeEncuesta, insumo => insumo.pregunta)
  insumos: InsumoDeEncuesta[];
}
