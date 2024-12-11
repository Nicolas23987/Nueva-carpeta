import { envs } from "./config/envs";
import { Server } from "./presentation/server";
import {AppRoutes} from './presentation/routers/routes'
import { sequelize } from "./data/sequelize/sequelize";

(async() => {
    main()
})();

async function main() {

    try {
        await sequelize.sync(); 
        console.log("Base de datos conectada");
    } catch (error) {
        console.error("Error al sincronizar la base de datos:", error);
        return;
    }

    const server = new Server({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH,
        routes: AppRoutes.routes
    })

    server.start();
}