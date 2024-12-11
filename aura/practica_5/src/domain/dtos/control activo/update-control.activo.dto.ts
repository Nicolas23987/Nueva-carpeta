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

export class UpdateControlActivoDto {

    private constructor(
        public readonly id: number,
        public readonly idActivo: number,
        public readonly idDepartamento: number,
        public readonly fechaAsignacion: Date,
        public readonly personaAsignada: string,
        public readonly tiempoDepreciacion: number
    ) {}

    get values() {
        const returnObj: { [key: string]: any } = {};

        if (this.fechaAsignacion) returnObj.fechaAsignacion = this.fechaAsignacion;
        if (this.idActivo) returnObj.idActivo = this.idActivo;
        if (this.idDepartamento) returnObj.idDepartamento = this.idDepartamento;
        if (this.personaAsignada) returnObj.personaAsignada = this.personaAsignada;
        if (this.tiempoDepreciacion) returnObj.tiempoDepreciacion = this.tiempoDepreciacion;

        return returnObj;
    }

    static update(props: { [key: string]: any }): [string?, UpdateControlActivoDto?] {
        const { id, idActivo, idDepartamento, fechaAsignacion, personaAsignada, tiempoDepreciacion } = props;

        if (!id) return ['La propiedad id es requerida', undefined];

        return [undefined, new UpdateControlActivoDto(id, idActivo, idDepartamento, fechaAsignacion, personaAsignada, tiempoDepreciacion)];
    }
}