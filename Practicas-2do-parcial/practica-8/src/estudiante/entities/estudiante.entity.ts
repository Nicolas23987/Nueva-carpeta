import { ControlIdioma } from 'src/control_idioma/entities/control_idioma.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Estudiante {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @Column()
  identificacion!: string;

  @OneToMany(() => ControlIdioma, (control) => control.estudiante)
  controles!: ControlIdioma[];
}
