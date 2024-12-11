import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Idioma } from './entities/idioma.entity';
import { CreateIdiomaDto } from './dto/create-idioma.dto';

@Injectable()
export class IdiomaService {
  constructor(
    @InjectRepository(Idioma)
    private readonly idiomaRepository: Repository<Idioma>,
  ) { }

  async create(createIdiomaDto: CreateIdiomaDto): Promise<Idioma> {
    const idioma = this.idiomaRepository.create(createIdiomaDto);
    return await this.idiomaRepository.save(idioma);
  }

  async findAll(): Promise<Idioma[]> {
    return await this.idiomaRepository.find();
  }

  async findOne(id: number): Promise<Idioma> {
    return await this.idiomaRepository.findOneBy({ id });
  }

  async update(id: number, updateIdiomaDto: any): Promise<Idioma> {
    await this.idiomaRepository.update(id, updateIdiomaDto);
    return this.findOne(id);
  }
  async remove(id: number): Promise<Idioma> {
    const idioma = await this.idiomaRepository.findOneBy({ id });
    if (!idioma) {
      throw new Error(`Idioma con id ${id} no encontrado`);
    }
    await this.idiomaRepository.delete(id);
    return idioma;
  }

}
