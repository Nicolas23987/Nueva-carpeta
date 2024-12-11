import { Encuesta } from 'src/encuesta/entities/encuesta.entity';
import { Pregunta } from 'src/pregunta/entities/pregunta.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class InsumoDeEncuesta {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Encuesta, encuesta => encuesta.insumos, { onDelete: 'CASCADE' })
  encuesta: Encuesta;

  @ManyToOne(() => Pregunta, pregunta => pregunta.insumos, { onDelete: 'CASCADE' })
  pregunta: Pregunta;

  @Column({ type: 'text' })
  escalas: string;

  @Column({ type: 'text' })
  grupoDePresentacion: string;
}
