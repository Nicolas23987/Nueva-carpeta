import { Router } from 'express';
import { ControlActivoController } from './controller'; 
import { ControlActivoDatasourceImpl } from '../../infrastructura/datasource/control.activo.datasource.impl'; // Asegúrate de que esta ruta sea correcta
import { ControlActivoRepositoryImpl } from '../../infrastructura/repositories/control.activo.repository.impl'; // Asegúrate de que esta ruta sea correcta
import { Departamento } from '../../data/models/departamento';

export class ControlActivoRoutes {
    static get routes(): Router {
        const router = Router();

        const datasource = new ControlActivoDatasourceImpl();
        const controlActivoRepository = new ControlActivoRepositoryImpl(datasource);
        const controlActivoController = new ControlActivoController(controlActivoRepository);

        router.get("/", controlActivoController.getControlActivo);
        router.get("/:id", controlActivoController.getControlActivoById);
        router.post("/", controlActivoController.createControlActivo);
        router.put("/:id", controlActivoController.updateControlActivo);
        router.delete("/:id", controlActivoController.deleteControlActivo);

        return router;
    }
}