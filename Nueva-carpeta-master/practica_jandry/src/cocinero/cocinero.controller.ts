import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CocineroService } from './cocinero.service';
import { CreateCocineroDto } from './dto/create-cocinero.dto';
import { UpdateCocineroDto } from './dto/update-cocinero.dto';

@Controller()
export class CocineroController {
  constructor(private readonly cocineroService: CocineroService) {}

  @MessagePattern({cmd:'createCocinero'})
  create(@Payload() createCocineroDto: CreateCocineroDto) {
    return this.cocineroService.create(createCocineroDto);
  }

  @MessagePattern({cmd:'findAllCocinero'})
  findAll() {
    return this.cocineroService.findAll();
  }

  @MessagePattern({cmd:'findOneCocinero'})
  findOne(@Payload() id: number) {
    return this.cocineroService.findOne(id);
  }

  @MessagePattern({cmd:'updateCocinero'})
  update(@Payload() updateCocineroDto: UpdateCocineroDto) {
    return this.cocineroService.update(updateCocineroDto.id, updateCocineroDto);
  }

  @MessagePattern({cmd:'removeCocinero'})
  remove(@Payload() id: number) {
    return this.cocineroService.remove(id);
  }
}
