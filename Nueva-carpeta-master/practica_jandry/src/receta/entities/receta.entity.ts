import { Preparacion } from 'src/preparacion/entities/preparacion.entity';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';

@Entity()
export class Receta extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre_plato: string;

  @Column('text')
  ingredientes: string;

  @Column('text')
  cantidades: string;
  
  @OneToMany(() => Preparacion, (preparacion) => preparacion.mesero)
  preparaciones: Preparacion[];
}
