import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { InversionRealizada } from "./InversionRealizada";

@Entity("conceptos_de_inversion") 
export class ConceptoDeInversion {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "varchar", length: 255, nullable: false })
  concepto!: string;

  @Column({ type: "text", nullable: false })
  detalle!: string;

  @OneToMany(() => InversionRealizada, (inversion) => inversion.inversionista)
  inversiones!: InversionRealizada[]; 

}
