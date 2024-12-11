import { Cocinero } from 'src/cocinero/entities/cocinero.entity';
import { Receta } from 'src/receta/entities/receta.entity';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn, OneToMany } from 'typeorm';

@Entity()
export class Preparacion extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Cocinero)
  @JoinColumn({ name: 'id_mesero' })
  mesero: Cocinero;

  @ManyToOne(() => Receta)
  @JoinColumn({ name: 'id_receta' })
  receta: Receta;

  @Column('date')
  fecha: string;

  @Column('time')
  hora: string;

  @Column('int')
  cantidad_a_preparar: number;

  @Column('float')
  costo: number;

  @Column('int')
  tiempo: number;


}
