import { ControlIdioma } from 'src/control_idioma/entities/control_idioma.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Idioma {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  descripcion!: string;

  @OneToMany(() => ControlIdioma, (control) => control.idioma)
  controles: ControlIdioma[];
}
