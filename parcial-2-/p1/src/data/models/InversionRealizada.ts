import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Inversionista } from "./Inversionista";
import { ConceptoDeInversion } from "./ConceptoDeInversion";

@Entity("inversion_realizada")
export class InversionRealizada {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => Inversionista, (inversionista) => inversionista.inversiones, { eager: true })
  inversionista!: Inversionista;

  @ManyToOne(() => ConceptoDeInversion, (conceptoDeInversion) => conceptoDeInversion.inversiones, { eager: true })
  conceptoDeInversion!: ConceptoDeInversion;

  @Column({ type: "float" })
  valorInversion!: number;

  @Column({ type: "date" })
  fecha!: Date;

  @Column({ type: "int" })
  duracionDeInversion!: number;
}
