import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ControlRealizado } from './ControlRealizado';

@Entity()
export class SignoVital {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descripcion: string;

    @Column()
    nivelMinimo: number;

    @Column()
    nivelMaximo: number;

    @OneToMany(() => ControlRealizado, control => control.signoVital)
    controles: ControlRealizado[];
}
