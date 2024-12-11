import { Injectable } from '@nestjs/common';
import { CreateActivoDto } from './dto/create-activo.dto';
import { UpdateActivoDto } from './dto/update-activo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Activo } from './entities/activo.entity';
import { Model } from 'mongoose';

@Injectable()
export class ActivoService {

  constructor(
    @InjectModel(Activo.name)
    private readonly activoServices: Model<Activo>
  ){}

  create(createActivoDto: CreateActivoDto):Promise<Activo> {
    return this.activoServices.create(createActivoDto);
  }

  findAll():Promise<Activo[]> {
    return this.activoServices.find();
  }
  
  findOne(id: number) {
    const activo = this.activoServices.findOne({ where: {id}});
    if ( !activo ) throw new Error (`Activo con id ${id} no encontrado`)
    return activo;
  }

  update(id: number, updateActivoDto: UpdateActivoDto) {
    const activo = this.findOne(id);
    this.activoServices.updateOne(updateActivoDto);
    return activo;
  }

  remove(id: number) {
    const activo = this.findOne(id);
    this.activoServices.deleteOne(activo);
    return activo;
  }
}
