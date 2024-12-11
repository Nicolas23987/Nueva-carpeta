import { Router } from 'express';
import { ControlActivoRoutes } from '../control activo/controller'; // Ensure this path is correct

export class AppRoutes {

    static get routes(): Router {

        const router = Router();
        router.use('/control-de-activo', ControlActivoRoutes.routes); // Updated the route path
        return router;
    }
}
