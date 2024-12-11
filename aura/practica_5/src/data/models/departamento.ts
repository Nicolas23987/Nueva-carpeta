import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ControlDeActivo } from './control.activo';

@Entity('departamento')
export class Departamento {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 255 })
  descripcion!: string;

  @OneToMany(() => ControlDeActivo, (control) => control.departamento, {
    cascade: true,
  })
  controles!: ControlDeActivo[];
}
