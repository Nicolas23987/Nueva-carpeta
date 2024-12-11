import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Estudiante } from 'src/estudiante/entities/estudiante.entity';
import { Idioma } from 'src/idioma/entities/idioma.entity';

@Entity({ name: 'control_idioma' })
export class ControlIdioma {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Estudiante, (estudiante) => estudiante.controles, { eager: true })
  estudiante!: Estudiante;

  @ManyToOne(() => Idioma, (idioma) => idioma.controles, { eager: true })
  idioma!: Idioma;

  @Column()
  porcentajeLectura!: number;

  @Column()
  porcentajeEscritura!: number;

  @Column()
  porcentajeEscucharHablar!: number;
}
