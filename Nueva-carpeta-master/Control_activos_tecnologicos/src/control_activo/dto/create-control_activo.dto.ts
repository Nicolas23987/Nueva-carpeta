import {
    IsNotEmpty,
    IsString,
    IsDateString,
    IsNumber,
    IsMongoId,
  } from 'class-validator';
  
  export class CreateControlDeActivoDto {
    @IsNotEmpty()
    @IsMongoId() 
    activoId: string;
  
    @IsNotEmpty()
    @IsMongoId() 
    departamentoId: string;
  
    @IsNotEmpty()
    @IsDateString() 
    fechaAsignacion: string;
  
    @IsNotEmpty()
    @IsString()
    personaAsignada: string;
  
    @IsNotEmpty()
    @IsNumber()
    tiempoDepreciacion: number;
}