import SignosVitales from '../models/signos_vitales';

export const getAllSignosVitales = async () => {
    try {
        const signosVitales = await SignosVitales.findAll();
        return {
            status: true,
            data: signosVitales,
        };
    } catch (error) {
        return {
            status: false,
            message: 'Error al obtener signos vitales',
            error,
        };
    }
};

export const createSignoVital = async (descripcion: string, nivel_min: number, nivel_max: number) => {
    try {
        const newSignoVital = await SignosVitales.create({ descripcion, nivel_min, nivel_max });
        return {
            status: true,
            data: newSignoVital,
        };
    } catch (error) {
        return {
            status: false,
            message: 'Error al crear signo vital',
            error,
        };
    }
};

export const getSignoVitalById = async (id: number) => {
    try {
        const signoVital = await SignosVitales.findByPk(id);
        if (signoVital) {
            return {
                status: true,
                data: signoVital,
            };
        } else {
            return {
                status: false,
                message: 'Signo vital no encontrado',
            };
        }
    } catch (error) {
        return {
            status: false,
            message: 'Error al obtener signo vital',
            error,
        };
    }
};

export const updateSignoVital = async (id: number, descripcion: string, nivel_min: number, nivel_max: number) => {
    try {
        const [updated] = await SignosVitales.update({ descripcion, nivel_min, nivel_max }, {
            where: { id },
        });

        if (updated) {
            const updatedSignoVital = await SignosVitales.findByPk(id);
            return {
                status: true,
                data: updatedSignoVital,
            };
        } else {
            return {
                status: false,
                message: 'Signo vital no encontrado',
            };
        }
    } catch (error) {
        return {
            status: false,
            message: 'Error al actualizar signo vital',
            error,
        };
    }
};

export const deleteSignoVital = async (id: number) => {
    try {
        const deleted = await SignosVitales.destroy({
            where: { id },
        });
        if (deleted) {
            return {
                status: true,
                message: 'Signo vital eliminado',
            };
        } else {
            return {
                status: false,
                message: 'Signo vital no encontrado',
            };
        }
    } catch (error) {
        return {
            status: false,
            message: 'Error al eliminar signo vital',
            error,
        };
    }
};
