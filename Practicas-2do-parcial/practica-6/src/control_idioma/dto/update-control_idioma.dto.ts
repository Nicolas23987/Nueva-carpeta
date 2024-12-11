import { PartialType } from '@nestjs/mapped-types';
import { CreateControlIdiomaDto } from './create-control_idioma.dto';

export class UpdateControlIdiomaDto extends PartialType(CreateControlIdiomaDto) {}
