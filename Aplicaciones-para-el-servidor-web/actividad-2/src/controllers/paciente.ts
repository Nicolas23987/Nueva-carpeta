import ControlSalud from '../models/control_salud';
import Paciente from '../models/paciente';
import SignosVitales from '../models/signos_vitales';

export const getAllPacientes = async () => {
    try {
        const pacientes = await Paciente.findAll({
            include: [{
                model: ControlSalud,
                include: [SignosVitales]
            }]
        });
        return {
            status: true,
            data: pacientes,
        };
    } catch (error) {
        return {
            status: false,
            message: 'Error al obtener pacientes',
            error: error,
        };
    }
};


export const createPaciente = async (nombre: string, identificacion: string, ) => {
    try {
        const newPaciente = await Paciente.create({ nombre, identificacion });
        return {
            status: true,
            data: newPaciente,
        };
    } catch (error) {
        return {
            status: false,
            message: 'Error al crear paciente',
            error: error,
        };
    }
};

export const getPacienteById = async (id: number) => {
    try {
        const paciente = await Paciente.findByPk(id);
        if (paciente) {
            return {
                status: true,
                data: paciente,
            };
        } else {
            return {
                status: false,
                message: 'Paciente no encontrado',
            };
        }
    } catch (error) {
        return {
            status: false,
            message: 'Error al obtener paciente',
            error: error,
        };
    }
};

export const updatePaciente = async (id: number, nombre: string, identificacion: string, controlesSalud?: any[]) => {
    try {
        const [updated] = await Paciente.update({ nombre, identificacion }, {
            where: { id },
        });

        if (updated) {
            if (controlesSalud) {
                // Eliminar controles de salud existentes del paciente
                await ControlSalud.destroy({
                    where: { pacienteId: id },
                });
                // Crear nuevos controles de salud
                const controlesConPacienteId = controlesSalud.map((control: any) => ({
                    ...control,
                    pacienteId: id,
                }));
                await ControlSalud.bulkCreate(controlesConPacienteId);
            }

            const updatedPaciente = await Paciente.findByPk(id, {
                include: ControlSalud,
            });
            return {
                status: true,
                data: updatedPaciente,
            };
        } else {
            return {
                status: false,
                message: 'Paciente no encontrado',
            };
        }
    } catch (error) {
        return {
            status: false,
            message: 'Error al actualizar paciente',
            error: error,
        };
    }
};



export const deletePaciente = async (id: number) => {
    try {
        const deleted = await Paciente.destroy({
            where: { id },
        });
        if (deleted) {
            await SignosVitales.destroy({
                where: { pacienteId: id },
            });
            return {
                status: true,
                message: 'Paciente eliminado',
            };
        } else {
            return {
                status: false,
                message: 'Paciente no encontrado',
            };
        }
    } catch (error) {
        return {
            status: false,
            message: 'Error al eliminar paciente',
            error: error,
        };
    }
};


