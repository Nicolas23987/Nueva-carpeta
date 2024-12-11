import 'reflect-metadata'; 
import { DataSource } from 'typeorm';
import { Inversionista } from '../models/Inversionista';
import { ConceptoDeInversion } from '../models/ConceptoDeInversion';
import { InversionRealizada } from '../models/InversionRealizada';

// Configuración de la conexión a MySQL usando TypeORM
export const AppDataSource = new DataSource({
  type: 'mysql',  
  host: 'localhost', 
  port: 3306,
  username: 'root',
  password: '', 
  database: 'inversion',
  entities: [
    Inversionista,
    ConceptoDeInversion,
    InversionRealizada
  ],
  synchronize: true,
});
