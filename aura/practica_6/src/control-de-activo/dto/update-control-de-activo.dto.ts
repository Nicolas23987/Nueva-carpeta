import { PartialType } from '@nestjs/mapped-types';
import { CreateControlDeActivoDto } from './create-control-de-activo.dto';
import { IsNumber } from 'class-validator';

export class UpdateControlDeActivoDto extends PartialType(CreateControlDeActivoDto) {
    @IsNumber()
    id: number
}
