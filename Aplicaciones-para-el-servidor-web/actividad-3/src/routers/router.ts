import { Router } from 'express';
import { PacienteController } from '../controllers/PacienteController';
import { SignoVitalController } from '../controllers/SignoVitalController';
import { ControlRealizadoController } from '../controllers/ControlRealizado';

const router = Router();

router.get('/pacientes', PacienteController.getAll);
router.get('/pacientes/:id', PacienteController.getOne);
router.post('/pacientes', PacienteController.create);
router.patch('/pacientes/:id', PacienteController.update);
router.delete('/pacientes/:id', PacienteController.delete);

router.get('/signos', SignoVitalController.getAll);
router.get('/signos/:id', SignoVitalController.getOne);
router.post('/signos', SignoVitalController.create);
router.patch('/signos/:id', SignoVitalController.update);
router.delete('/signos/:id', SignoVitalController.delete);

router.get('/controles', ControlRealizadoController.getAll);
router.get('/controles/:id', ControlRealizadoController.getOne);
router.post('/controles', ControlRealizadoController.create);
router.patch('/controles/:id', ControlRealizadoController.update);
router.delete('/controles/:id', ControlRealizadoController.delete);

export default router;
