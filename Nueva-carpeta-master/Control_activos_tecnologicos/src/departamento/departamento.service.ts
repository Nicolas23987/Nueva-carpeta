import { Injectable } from '@nestjs/common';
import { CreateDepartamentoDto } from './dto/create-departamento.dto';
import { UpdateDepartamentoDto } from './dto/update-departamento.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Departamento } from './entities/departamento.entity';
import { Model } from 'mongoose';
import { error } from 'console';

@Injectable()
export class DepartamentoService {

  constructor(
    @InjectModel(Departamento.name)
    private readonly departamentoServices: Model<Departamento>
  ){}

  create(createDepartamentoDto: CreateDepartamentoDto):Promise<Departamento> {
    return this.departamentoServices.create(createDepartamentoDto)
  }

  findAll():Promise<Departamento[]> {
    return this.departamentoServices.find();
  }

  findOne(id: number):Promise<Departamento> {
    const departamento = this.departamentoServices.findOne({ where: {id}})
  if ( !departamento ) throw new Error (`Departamento con id ${id} no encontrado`);
    return departamento;
  }
        
  update(id: number, updateDepartamentoDto: UpdateDepartamentoDto):Promise<Departamento> {
    const departamento = this.findOne(id)
    this.departamentoServices.updateOne(updateDepartamentoDto)
    return departamento;
  }

  remove(id: number):Promise<Departamento> {
    const departamento = this.findOne(id);
    this.departamentoServices.deleteOne(departamento);
    return departamento;
  }
}
