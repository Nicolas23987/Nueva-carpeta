import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ControlIdioma } from 'src/control_idioma/entities/control_idioma.entity';

@ObjectType({ description: 'Estudiante' })
@Entity()
export class Estudiante {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  nombre!: string;

  @Field()
  @Column()
  identificacion!: string;

  @Field(() => [ControlIdioma], { nullable: 'items' })
  @OneToMany(() => ControlIdioma, (control) => control.estudiante)
  controles!: ControlIdioma[];
}
