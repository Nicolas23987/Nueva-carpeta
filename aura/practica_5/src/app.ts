import { envs } from "./config/envs";
import { Server } from "./presentation/server";
import { AppRoutes } from './presentation/routers/routes'
import { AppDataSource } from "./conexion/conexion";

(async () => {
    main()
})();

async function main() {

    try {
        await AppDataSource.initialize();
        console.log("Sincronizando base de datos...");
        await AppDataSource.synchronize();  
        console.log("Base de datos sincronizada");

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