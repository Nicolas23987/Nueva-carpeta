import { Router } from 'express';
import { ControlRealizadoController } from './controller'; 
import { ControlRealizadoDatasourceImpl } from '../../infrastructura/datasource/control.realizado.datasource.impl'; // Asegúrate de que esta ruta sea correcta
import { ControlRealizadoRepositoryImpl } from '../../infrastructura/repositories/control.realizado.repository.impl'; // Asegúrate de que esta ruta sea correcta

export class ControlRealizadoRoutes {
    static get routes(): Router {
        const router = Router();

        const datasource = new ControlRealizadoDatasourceImpl();
        const controlRealizadoRepository = new ControlRealizadoRepositoryImpl(datasource);
        const controlRealizadoController = new ControlRealizadoController(controlRealizadoRepository);

        router.get("/", controlRealizadoController.getControlRealizado);
        router.get("/:id", controlRealizadoController.getControlRealizadoById);
        router.post("/", controlRealizadoController.createControlRealizado);
        router.put("/:id", controlRealizadoController.updateControlRealizado);
        router.delete("/:id", controlRealizadoController.deleteControlRealizado);

        return router;
    }
}
