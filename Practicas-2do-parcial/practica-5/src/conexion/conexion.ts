import { DataSource } from "typeorm";
import { envs } from "../config/envs";
import { ControlDeIdioma } from "../data/models/ControlDeIdioma";
import { Estudiante } from "../data/models/Estudiante";
import { Idioma } from "../data/models/Idioma";

export const AppDataSource = new DataSource({
  type: "mysql",
  url: envs.MYSQL_URL,
  synchronize: true,
  entities: [ControlDeIdioma, Estudiante, Idioma], 
  migrations: [],
  subscribers: [],
});
