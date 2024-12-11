import { DataSource } from "typeorm";
import { envs } from "../config/envs";
import { ControlDeIdioma } from "../data/models/control.activo";
import { Estudiante } from "../data/models/activo";
import { Idioma } from "../data/models/departamento";

export const AppDataSource = new DataSource({
  type: "mysql",
  url: envs.MYSQL_URL,
  synchronize: true,
  entities: [ControlDeIdioma, Estudiante, Idioma], 
  migrations: [],
  subscribers: [],
});
