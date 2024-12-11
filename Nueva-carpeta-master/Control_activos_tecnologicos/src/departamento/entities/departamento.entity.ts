import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Departamento extends Document {
  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  personaEncargada: string;
}

export const DepartamentoSchema = SchemaFactory.createForClass(Departamento);
