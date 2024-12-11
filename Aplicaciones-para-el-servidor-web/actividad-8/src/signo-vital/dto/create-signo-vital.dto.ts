import { IsNotEmpty, IsNumber, IsString, Min } from "class-validator";

export class CreateSignoVitalDto {

    @IsNotEmpty()
    @IsString()
    descripcion: string;

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    nivelMinimo: number;

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    nivelMaximo: number;
}

