import { Router } from 'express';
import { InversionRealizadaRoutes } from '../control de idioma/router';

export class AppRoutes {

    static get routes(): Router {
        const router = Router();
        router.use('/inversion-realizada', InversionRealizadaRoutes.routes);
        return router
    }
}