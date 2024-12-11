import { Activo } from 'src/activo/entities/activo.entity';
import { Departamento } from 'src/departamento/entities/departamento.entity';
import {
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    Column,
    JoinColumn,
  } from 'typeorm';
  
  @Entity()
  export class ControlDeActivo {
    @PrimaryGeneratedColumn()
    id: number;
  
    @ManyToOne(() => Activo, (activo) => activo.controles)
    @JoinColumn({ name: 'idActivo' })
    activo: Activo;
  
    @ManyToOne(() => Departamento, (departamento) => departamento.controles)
    @JoinColumn({ name: 'idDepartamento' })
    departamento: Departamento;
  
    @Column()
    fechaAsignacion: Date;
  
    @Column()
    personaAsignada: string;
  
    @Column()
    tiempoDepreciacion: number;
  }
  