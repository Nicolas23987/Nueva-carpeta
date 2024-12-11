import { Activo } from "../../../data/models/activo";
import { Departamento } from "../../../data/models/departamento";

export class CreateControlActivoDto {

    private constructor(
        public idActivo: number,
        public idDepartamento: number,
        public fechaAsignacion: Date,
        public personaAsignada: string,
        public tiempoDepreciacion: number,
    ) {}

    static create(props: { [key: string]: any }): [string?, CreateControlActivoDto?] {
        const { idActivo, idDepartamento, fechaAsignacion, personaAsignada, tiempoDepreciacion } = props;
        if (!idActivo) return ['La propiedad idActivo es requerida', undefined];
        if (!idDepartamento) return ['La propiedad idDepartamento es requerida', undefined];
        if (!fechaAsignacion) return ['La propiedad fechaAsignacion es requerida', undefined];
        if (!personaAsignada) return ['La propiedad personaAsignada es requerida', undefined];
        if (!tiempoDepreciacion) return ['La propiedad tiempoDepreciacion es requerida', undefined];

        return [undefined, new CreateControlActivoDto(idActivo, idDepartamento, fechaAsignacion, personaAsignada, tiempoDepreciacion)];
    }
}