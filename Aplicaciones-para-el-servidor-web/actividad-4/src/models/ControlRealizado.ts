import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Paciente } from './Paciente';
import { SignoVital } from './SignoVital';

@Entity()
export class ControlRealizado {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Paciente, paciente => paciente.controles)
    paciente: Paciente;

    @ManyToOne(() => SignoVital, signoVital => signoVital.controles)
    signoVital: SignoVital;

    @Column()
    fecha: Date;

    @Column()
    hora: string;

    @Column()
    valor: number;
}
