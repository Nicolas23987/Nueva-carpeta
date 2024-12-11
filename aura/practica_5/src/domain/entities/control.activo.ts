import { Activo } from "../../data/models/activo";
import { Departamento } from "../../data/models/departamento";

export class ControlActivoEntity {

    constructor(
        public activo: Activo,
        public departamento: Departamento,
        public fechaAsignacion: Date,
        public personaAsignada: string,
        public tiempoDepreciacion: number
    ) {}

    public static fromObject(object: { [key: string]: any }): ControlActivoEntity {
        const { id, activo, departamento, fechaAsignacion, personaAsignada, tiempoDepreciacion } = object;
        if (!id) throw 'La propiedad id es requerida';
        if (!activo) throw 'La propiedad id_activo es requerida';
        if (!departamento) throw 'La propiedad id_departamento es requerida';
        if (!fechaAsignacion) throw 'La propiedad fechaAsignacion es requerida';
        if (!personaAsignada) throw 'La propiedad personaAsignada es requerida';
        if (tiempoDepreciacion === null || tiempoDepreciacion === undefined) throw 'La propiedad tiempoDepreciacion es requerida';

        return new ControlActivoEntity(
            activo,
            departamento,
            fechaAsignacion,
            personaAsignada,
            tiempoDepreciacion
        );
    }
}
