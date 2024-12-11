import { Router } from 'express';
import { PacienteRoutes } from '../paciente/router';
import { ControlRealizadoRoutes } from '../control realizado/router';
import { SignoVitalRoutes } from '../signo vital/router';



export class AppRoutes {


    static get routes(): Router {

        const router = Router();

        router.use('/pacientes', PacienteRoutes.routes);
        router.use('/control-realizado', ControlRealizadoRoutes.routes);
        router.use('/signos-vitales', SignoVitalRoutes.routes);


        return router
    }
}