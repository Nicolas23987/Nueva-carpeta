import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Estudiante } from 'src/estudiante/entities/estudiante.entity';
import { Idioma } from 'src/idioma/entities/idioma.entity';

@ObjectType({ description: 'Control de idioma' })
@Entity({ name: 'control_idioma' })
export class ControlIdioma {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => Estudiante)
  @ManyToOne(() => Estudiante, (estudiante) => estudiante.controles, { eager: true })
  estudiante!: Estudiante;

  @Field(() => Idioma)
  @ManyToOne(() => Idioma, (idioma) => idioma.controles, { eager: true })
  idioma!: Idioma;

  @Field(() => Int)
  @Column()
  porcentajeLectura!: number;

  @Field(() => Int)
  @Column()
  porcentajeEscritura!: number;

  @Field(() => Int)
  @Column()
  porcentajeEscucharHablar!: number;
}
