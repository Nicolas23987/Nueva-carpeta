import { Request, Response, Router } from 'express';
import { getAllSignosVitales, createSignoVital, deleteSignoVital, getSignoVital, updateSignoVital } from '../controllers/SignoVitalController';
import { createControlRealizado, deleteControlRealizado, getAllControles, getControlRealizado, updateControlRealizado } from '../controllers/ControlRealizado';
import { registrarUsuario, iniciarSesion } from '../controllers/Usuario';
import { getAllPacientes, getPaciente, createPaciente, updatePaciente, deletePaciente } from '../controllers/PacienteController';
import { verificarToken } from '../middlewares/authMiddleware';



const router = Router();

router.post('/registro', registrarUsuario);
router.post('/login', iniciarSesion);


router.get('/ruta-protegida', verificarToken, (req, res) => {
    res.json({ 
        mensaje: 'Ruta protegida accesible' 
    });
});


router.get('/pacientes', getAllPacientes);
router.get('/pacientes/:id', getPaciente);
router.post('/pacientes', createPaciente);
router.put('/pacientes/:id', updatePaciente);
router.delete('/pacientes/:id', deletePaciente);

router.get('/signos-vitales', getAllSignosVitales);
router.get('/signos-vitales/:id', getSignoVital);
router.post('/signos-vitales', createSignoVital);
router.put('/signos-vitales/:id', updateSignoVital);
router.delete('/signos-vitales/:id', deleteSignoVital);

router.get('/controles', getAllControles);
router.get('/controles/:id', getControlRealizado);
router.post('/controles', createControlRealizado);
router.put('/controles/:id', updateControlRealizado);
router.delete('/controles/:id', deleteControlRealizado);

export default router;
