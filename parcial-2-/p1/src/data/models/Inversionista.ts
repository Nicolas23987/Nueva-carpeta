import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { InversionRealizada } from "./InversionRealizada";

@Entity("inversionistas")
export class Inversionista {
  @PrimaryGeneratedColumn("uuid")
  id!: string; 

  @Column({ type: "varchar", length: 255, nullable: false })
  nombre!: string;

  @Column({ type: "varchar", length: 255, nullable: false })
  identificacion!: string;

  @OneToMany(() => InversionRealizada, (inversion) => inversion.inversionista)
  inversiones!: InversionRealizada[]; 

}
