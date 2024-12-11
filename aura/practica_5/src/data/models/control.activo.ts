import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, JoinColumn } from 'typeorm';
import { Activo } from './activo';
import { Departamento } from './departamento';

@Entity('control_de_activo')
export class ControlDeActivo {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Activo, (activo) => activo.controles, {
    eager: true,
  })
  @JoinColumn({ name: 'activo_id' })
  activo!: Activo;

  @ManyToOne(() => Departamento, (departamento) => departamento.controles, {
    eager: true,
  })
  @JoinColumn({ name: 'departamento_id' })
  departamento!: Departamento;

  @Column('date')
  fechaAsignacion!: Date;

  @Column({ type: 'varchar', length: 255 })
  personaAsignada!: string;

  @Column('float')
  tiempoDepreciacion!: number;

  constructor(init?: Partial<ControlDeActivo>) {
    Object.assign(this, init);
  }
}
