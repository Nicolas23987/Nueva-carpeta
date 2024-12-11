import { Router } from 'express';
import { ControlIdiomaController } from './controller'; 
import { ControlIdiomaDatasourceImpl } from '../../infrastructura/datasource/control.idioma.datasource.impl'; // Asegúrate de que esta ruta sea correcta
import { ControlIdiomaRepositoryImpl } from '../../infrastructura/repositories/control.idioma.repository.impl'; // Asegúrate de que esta ruta sea correcta
import { Idioma } from '../../data/models/Idioma';

export class ControlIdiomaRoutes {
    static get routes(): Router {
        const router = Router();

        const datasource = new ControlIdiomaDatasourceImpl();
        const controlDeIdiomaRepository = new ControlIdiomaRepositoryImpl(datasource);
        const controlDeIdiomaController = new ControlIdiomaController(controlDeIdiomaRepository);

        router.get("/", controlDeIdiomaController.getControlIdioma);
        router.get("/:id", controlDeIdiomaController.getControlIdiomaById);
        router.post("/", controlDeIdiomaController.createControlIdioma);
        router.put("/:id", controlDeIdiomaController.updateControlIdioma);
        router.delete("/:id", controlDeIdiomaController.deleteControlIdioma);

        return router;
    }
}
