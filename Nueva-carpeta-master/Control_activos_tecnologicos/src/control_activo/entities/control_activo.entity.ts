import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Activo } from 'src/activo/entities/activo.entity';
import { Departamento } from 'src/departamento/entities/departamento.entity';

@Schema()
export class ControlDeActivo extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Activo', required: true })
  activoId: Activo;

  @Prop({ type: Types.ObjectId, ref: 'Departamento', required: true })
  departamentoId: Departamento;

  @Prop({ required: true })
  fechaAsignacion: Date;

  @Prop({ required: true })
  personaAsignada: string;

  @Prop({ required: true })
  tiempoDepreciacion: number;
}

export const ControlDeActivoSchema = SchemaFactory.createForClass(ControlDeActivo);