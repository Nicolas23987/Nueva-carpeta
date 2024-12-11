import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  JoinColumn,
} from 'typeorm';
import { Estudiante } from './Estudiante';
import { Idioma } from './Idioma';

@Entity('control_de_idioma')
export class ControlDeIdioma {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Estudiante, (estudiante) => estudiante.controles, {
    eager: true,
  })
  @JoinColumn({ name: 'estudiante_id' })
  estudiante!: Estudiante;

  @ManyToOne(() => Idioma, (idioma) => idioma.controles, {
    eager: true,
  })
  @JoinColumn({ name: 'idioma_id' })
  idioma!: Idioma;

  @Column('float')
  porcentajeLectura!: number;

  @Column('float')
  porcentajeEscritura!: number;

  @Column('float')
  porcentajeEscucharHablar!: number;

  constructor(init?: Partial<ControlDeIdioma>) {
    Object.assign(this, init);
  }
}
