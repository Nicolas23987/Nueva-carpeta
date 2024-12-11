import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ControlIdioma } from 'src/control_idioma/entities/control_idioma.entity';

@ObjectType({ description: 'Idioma' })
@Entity()
export class Idioma {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  descripcion!: string;

  @Field(() => [ControlIdioma], { nullable: 'items' })
  @OneToMany(() => ControlIdioma, (control) => control.idioma)
  controles: ControlIdioma[];
}
