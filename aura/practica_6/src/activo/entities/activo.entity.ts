import { ControlDeActivo } from 'src/control-de-activo/entities/control-de-activo.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Activo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  activoTecnologico: string;

  @OneToMany(() => ControlDeActivo, (control) => control.activo)
  controles: ControlDeActivo[];
}
