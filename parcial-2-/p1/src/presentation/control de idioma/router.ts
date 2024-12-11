import { Router } from 'express';
import { InversionRealizadaDatasourceImpl } from '../../infrastructura/datasource/inversion.realizada.datasource.impl'; // Asegúrate de que esta ruta sea correcta
import { InversionRealizadaRepositoryImpl } from '../../infrastructura/repositories/inversion.realizada.repository.impl';
import { InversionRealizadaController } from './controller';
import { AppDataSource } from '../../data/typeorm/datasources';

export class InversionRealizadaRoutes {
    static get routes(): Router {
        const router = Router();

        const datasource = new InversionRealizadaDatasourceImpl(AppDataSource);
        const inversionRealizadaRepository = new InversionRealizadaRepositoryImpl(datasource);
        const inversionRealizadaController = new InversionRealizadaController(inversionRealizadaRepository);

        router.get("/", inversionRealizadaController.getInversionRealizada);
        router.get("/:id", inversionRealizadaController.getInversionRealizadaById);
        router.post("/", inversionRealizadaController.createInversionRealizada);
        router.put("/:id", inversionRealizadaController.updateInversionRealizada);
        router.delete("/:id", inversionRealizadaController.deleteInversionRealizada);

        return router;
    }
}
