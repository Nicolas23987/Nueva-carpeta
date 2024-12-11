import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity() 
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    nombre: string; 

    @Column({ type: 'varchar', length: 255 })
    clave: string;

    @Column({ type: 'varchar', length: 10 })
    estado: 'Activo' | 'Inactivo'; 
}
