import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ControlDeIdioma } from './ControlDeIdioma';

@Entity('idioma')
export class Idioma {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 255 })
  descripcion!: string;

  @OneToMany(() => ControlDeIdioma, (control) => control.idioma, {
    cascade: true,
  })
  controles!: ControlDeIdioma[];
}
