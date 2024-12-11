import * as pacienteControllers from './controllers/paciente';
import * as signosVitalesControllers from './controllers/signos_vitales';
import * as controlSaludControllers from './controllers/controlSalud';

import app from "./index";
// import sequelize from "./conexion/conexion";
// sequelize.sync({ force: true }); 
const PORT = process.env.PORT || 3300;

app.listen(PORT, () => {
    console.log(`Puerto corriendo en ${PORT}`);
});




//==========================================CRUD Pacientes==========================================

// Read (Todos)
async function obtenerTodosLosPacientes() {
    try {
        const result = await pacienteControllers.getAllPacientes();
        console.log('Todos los pacientes:', result);
    } catch (error) {
        console.error('Error al obtener pacientes:', error);
    }
}

// Read (Por ID)
async function obtenerPacientePorId() {
    const id = 2; // Cambia este ID según lo que necesites
    try {
        const result = await pacienteControllers.getPacienteById(id);
        console.log('Paciente encontrado:', result);
    } catch (error) {
        console.error('Error al obtener paciente:', error);
    }
}

// Create
async function crear_paciente() {
    const nombre = 'Juan';
    const identificacion = '45442';
    try {
        const result = await pacienteControllers.createPaciente(nombre, identificacion);
        console.log(result);
    } catch (error) {
        console.error('Error al crear paciente:', error);
    }
}

// Update
async function actualizarPaciente() {
    const id = 1; // Cambia este ID según lo que necesites
    const nombre = 'Juan Actualizado';
    const identificacion = '45442';
    const controlesSalud: any[] = []; // Cambia 'any' por un tipo más específico si es necesario
    
    try {
        const result = await pacienteControllers.updatePaciente(id, nombre, identificacion, controlesSalud);
        console.log('Paciente actualizado:', result);
    } catch (error) {
        console.error('Error al actualizar paciente:', error);
    }
}

// Delete
async function eliminarPaciente() {
    const id = 1; 
    
    try {
        const result = await pacienteControllers.deletePaciente(id);
        console.log('Paciente eliminado:', result);
    } catch (error) {
        console.error('Error al eliminar paciente:', error);
    }
}

// obtenerTodosLosPacientes();
// obtenerPacientePorId();
// crear_paciente();
// actualizarPaciente();
// eliminarPaciente();

///===================================================CRUD Control de Salud======================================

// Create
async function crearControlSalud() {
    const pacienteId = 1; 
    const signoVitalData = {
        descripcion: 'Frecuencia Cardiaca',
        nivel_min: 60,
        nivel_max: 100,
    };
    const fecha = '2024-01-01';
    const hora = '08:00';
    const valor = 75;

    try {
        const result = await controlSaludControllers.createControlSalud(pacienteId, signoVitalData, fecha, hora, valor);
        console.log('Registro de control de salud creado:', result);
    } catch (error) {
        console.error('Error al crear control de salud:', error);
    }
}

// Read (Todos)
async function obtenerTodosLosControlesSalud() {
    try {
        const result = await controlSaludControllers.getAllControlSalud();
        console.log('Todos los registros de control de salud:', result);
    } catch (error) {
        console.error('Error al obtener registros de control de salud:', error);
    }
}

// Read (Por ID)
async function obtenerControlSaludPorId() {
    const id = 4; 
    try {
        const result = await controlSaludControllers.getControlSaludById(id);
        console.log('Registro de control de salud encontrado:', result);
    } catch (error) {
        console.error('Error al obtener registro de control de salud:', error);
    }
}

// Update
async function actualizarControlSalud() {
    const id = 3; // Cambia este ID según lo que necesites
    const pacienteId = 1; 
    const signoVitalId = 1; // Cambia según el signo vital que necesites
    const fecha = '2024-01-02';
    const hora = '09:00';
    const valor = 80;

    try {
        const result = await controlSaludControllers.updateControlSalud(id, pacienteId, signoVitalId, fecha, hora, valor);
        console.log('Registro de control de salud actualizado:', result);
    } catch (error) {
        console.error('Error al actualizar registro de control de salud:', error);
    }
}

// Delete
async function eliminarControlSalud() {
    const id = 1; // Cambia este ID según lo que necesites

    try {
        const result = await controlSaludControllers.deleteControlSalud(id);
        console.log('Registro de control de salud eliminado:', result);
    } catch (error) {
        console.error('Error al eliminar registro de control de salud:', error);
    }
}

// Ejecución de las funciones


// crearControlSalud();
// obtenerTodosLosControlesSalud();
// obtenerControlSaludPorId();
// actualizarControlSalud();
// eliminarControlSalud();


//===================================================CRUD Signos Vitales======================================

// Create
async function crearSignoVital() {
    const descripcion = 'Temperatura';
    const nivel_min = 36;
    const nivel_max = 37.5;

    try {
        const result = await signosVitalesControllers.createSignoVital(descripcion, nivel_min, nivel_max);
        console.log('Signo vital creado:', result);
    } catch (error) {
        console.error('Error al crear signo vital:', error);
    }
}

// Read (Todos)
async function obtenerTodosLosSignosVitales() {
    try {
        const result = await signosVitalesControllers.getAllSignosVitales();
        console.log('Todos los signos vitales:', result);
    } catch (error) {
        console.error('Error al obtener signos vitales:', error);
    }
}

// Read (Por ID)
async function obtenerSignoVitalPorId() {
    const id = 1; // Cambia este ID según lo que necesites
    try {
        const result = await signosVitalesControllers.getSignoVitalById(id);
        console.log('Signo vital encontrado:', result);
    } catch (error) {
        console.error('Error al obtener signo vital:', error);
    }
}

// Update
async function actualizarSignoVital() {
    const id = 1; // Cambia este ID según lo que necesites
    const descripcion = 'Temperatura Actualizada';
    const nivel_min = 35;
    const nivel_max = 38;

    try {
        const result = await signosVitalesControllers.updateSignoVital(id, descripcion, nivel_min, nivel_max);
        console.log('Signo vital actualizado:', result);
    } catch (error) {
        console.error('Error al actualizar signo vital:', error);
    }
}

// Delete
async function eliminarSignoVital() {
    const id = 3; // Cambia este ID según lo que necesites

    try {
        const result = await signosVitalesControllers.deleteSignoVital(id);
        console.log('Signo vital eliminado:', result);
    } catch (error) {
        console.error('Error al eliminar signo vital:', error);
    }
}

// Ejecución de las funciones

// crearSignoVital();
// obtenerTodosLosSignosVitales();
// obtenerSignoVitalPorId();
// actualizarSignoVital();
// eliminarSignoVital();
