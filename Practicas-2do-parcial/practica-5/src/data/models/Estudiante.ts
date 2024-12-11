import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ControlDeIdioma } from './ControlDeIdioma';

@Entity('estudiante')
export class Estudiante {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 255 })
  nombre!: string;

  @Column({ type: 'varchar', length: 255 })
  identificacion!: string;

  @OneToMany(() => ControlDeIdioma, (control) => control.estudiante, {
    cascade: true,
  })
  controles!: ControlDeIdioma[];
}
