import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ControlRealizado } from './ControlRealizado';

@Entity()
export class Paciente {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    identificacion: string;

    @OneToMany(() => ControlRealizado, control => control.paciente)
    controles: ControlRealizado[];
}
