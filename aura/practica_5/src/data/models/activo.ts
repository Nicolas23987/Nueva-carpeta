import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ControlDeActivo } from './control.activo';

@Entity('estudiante')
export class Estudiante {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 255 })
  nombre!: string;

  @Column({ type: 'varchar', length: 255 })
  identificacion!: string;

  @OneToMany(() => ControlDeActivo, (control) => control.activo, {
    cascade: true,
  })
  controles!: ControlDeActivo[];
}
