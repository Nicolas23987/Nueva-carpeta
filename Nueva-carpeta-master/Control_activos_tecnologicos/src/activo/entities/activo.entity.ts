import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Activo extends Document {
  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  activoTecnologico: string;
}

export const ActivoSchema = SchemaFactory.createForClass(Activo);
