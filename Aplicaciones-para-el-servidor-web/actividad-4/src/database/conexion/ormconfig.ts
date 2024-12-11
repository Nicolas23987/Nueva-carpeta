import { DataSource } from 'typeorm';
import { ControlRealizado } from '../../models/ControlRealizado';
import { SignoVital } from '../../models/SignoVital';
import { Paciente } from '../../models/Paciente';
import { Usuario } from '../../models/Usuario';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'web',
  synchronize: true,
  logging: false,
  entities: [Paciente, SignoVital, ControlRealizado, Usuario], 
});
          