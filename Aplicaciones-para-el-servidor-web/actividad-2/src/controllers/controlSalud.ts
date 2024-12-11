import ControlSalud from '../models/control_salud';
import Paciente from '../models/paciente';
import SignosVitales from '../models/signos_vitales';



export const getAllControlSalud = async (): Promise<{ status: boolean; data?: any; message?: string; error?: any; }> => {
    try {
        const registros = await ControlSalud.findAll({
            include: [
                { model: Paciente, attributes: ['nombre', 'identificacion'] },
                { model: SignosVitales, attributes: ['descripcion'] }
            ],
        });
        return { status: true, data: registros };
    } catch (error) {
        return { status: false, message: 'Error al obtener registros de control de salud', error };
    }
};

export const createControlSalud = async (pacienteId: number,signoVitalData: { descripcion: string; nivel_min: number; nivel_max: number },fecha: string, hora: string, valor: number): Promise<{ status: boolean; data?: any; message?: string; error?: any; }> => {
    try {
        const newSignoVital = await SignosVitales.create(signoVitalData);
        const newRegistro = await ControlSalud.create({
            pacienteId,
            signoVitalId: newSignoVital.id,
            fecha,
            hora,
            valor,
        });

        return { status: true, data: newRegistro };
    } catch (error) {
        return { status: false, message: 'Error al crear registro de control de salud', error };
    }
};



export const getControlSaludById = async (id: number): Promise<{ status: boolean; data?: any; message?: string; error?: any; }> => {
    try {
        const registro = await ControlSalud.findByPk(id, {
            include: [
                { model: Paciente, attributes: ['nombre', 'identificacion'] },
                { model: SignosVitales, attributes: ['descripcion'] }
            ],
        });
        if (registro) {
            return { status: true, data: registro };
        } else {
            return { status: false, message: 'Registro de control de salud no encontrado' };
        }
    } catch (error) {
        return { status: false, message: 'Error al obtener registro de control de salud', error };
    }
};

export const updateControlSalud = async (id: number, pacienteId: number, signoVitalId: number, fecha: string, hora: string, valor: number): Promise<{ status: boolean; data?: any; message?: string; error?: any; }> => {
    try {
        const [updated] = await ControlSalud.update({ pacienteId, signoVitalId, fecha, hora, valor }, { where: { id } });

        if (updated) {
            const updatedRegistro = await ControlSalud.findByPk(id);
            return { status: true, data: updatedRegistro };
        } else {
            return { status: false, message: 'Registro de control de salud no encontrado' };
        }
    } catch (error) {
        return { status: false, message: 'Error al actualizar registro de control de salud', error };
    }
};

export const deleteControlSalud = async (id: number): Promise<{ status: boolean; message?: string; error?: any; }> => {
    try {
        const deleted = await ControlSalud.destroy({ where: { id } });
        if (deleted) {
            return { status: true, message: 'Registro de control de salud eliminado' };
        } else {
            return { status: false, message: 'Registro de control de salud no encontrado' };
        }
    } catch (error) {
        return { status: false, message: 'Error al eliminar registro de control de salud', error };
    }
};
