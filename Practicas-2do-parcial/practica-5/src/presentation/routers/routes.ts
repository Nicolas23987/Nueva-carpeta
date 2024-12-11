import { Router } from 'express';
import { ControlIdiomaRoutes } from '../control idioma/router';

export class AppRoutes {

    static get routes(): Router {

        const router = Router();
        router.use('/control-idioma', ControlIdiomaRoutes.routes);
        return router
    }
}