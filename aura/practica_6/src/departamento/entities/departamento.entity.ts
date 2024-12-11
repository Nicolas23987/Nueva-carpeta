import { ControlDeActivo } from 'src/control-de-activo/entities/control-de-activo.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Departamento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  personaEncargada: string;

  @OneToMany(() => ControlDeActivo, (control) => control.departamento)
  controles: ControlDeActivo[];
}
