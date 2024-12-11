import { Preparacion } from 'src/preparacion/entities/preparacion.entity';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';

@Entity()
export class Cocinero extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column('float')
  sueldo_basico: number;

  @OneToMany(() => Preparacion, (preparacion) => preparacion.mesero)
  preparaciones: Preparacion[];
}