import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { SignoVitalService } from './signo_vital.service';
import { CreateSignoVitalDto } from './dto/create-signo_vital.dto';
import { UpdateSignoVitalDto } from './dto/update-signo_vital.dto';

@Controller()
export class SignoVitalController {
  constructor(private readonly signoVitalService: SignoVitalService) {}

  @MessagePattern({cmd:'createSignoVital'})
  create(@Payload() createSignoVitalDto: CreateSignoVitalDto) {
    return this.signoVitalService.create(createSignoVitalDto);
  }

  @MessagePattern({cmd:'findAllSignoVital'})
  findAll() {
    return this.signoVitalService.findAll();
  }

  @MessagePattern({cmd:'findOneSignoVital'})
  findOne(@Payload() id: number) {
    return this.signoVitalService.findOne(id);
  }

  @MessagePattern({cmd:'updateSignoVital'})
  update(@Payload() updateSignoVitalDto: UpdateSignoVitalDto) {
    return this.signoVitalService.update(updateSignoVitalDto.id, updateSignoVitalDto);
  }

  @MessagePattern({cmd:'removeSignoVital'})
  remove(@Payload() id: number) {
    return this.signoVitalService.remove(id);
  }
}
