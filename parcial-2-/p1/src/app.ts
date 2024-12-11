import { envs } from "./config/envs";
import { Server } from "./presentation/server";
import {AppRoutes} from './presentation/routers/routes'
import { AppDataSource } from "./data/typeorm/datasources";

(async() => {
    main()
})();

async function main() {

  AppDataSource.initialize()
  .then(() => {
    console.log("Conexión a la base de datos establecida con éxito.");
  })
  .catch((error) => {
    console.error("Error al conectar a la base de datos:", error);
  });

    const server = new Server({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH,
        routes: AppRoutes.routes
    })
    server.start();
}