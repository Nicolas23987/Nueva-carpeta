import { Estudiante } from "../../../data/models/Estudiante";
import { Idioma } from "../../../data/models/Idioma";





export class CreateControlIdiomaDto{

    private constructor(
        public idEstudiante: number,
        public idIdioma: number,
        public porcentajeLectura: number,
        public porcentajeEscritura: number,
        public porcentajeEscucharHablar: number,

    ){}

    static create ( props: {[key: string]: any} ): [string?, CreateControlIdiomaDto?] {
        const { idIdioma, idEstudiante, porcentajeLectura, porcentajeEscritura, porcentajeEscucharHablar } = props
        if ( !idIdioma ) return ['La propiedad idIdioma es requerida', undefined];
        if ( !idEstudiante ) return ['La propiedad idEstudiante es requerida', undefined];
        if ( !porcentajeLectura ) return ['La propiedad fecha es requerida', undefined];
        if ( !porcentajeEscritura ) return ['La propiedad hora es requerida', undefined];
        if ( !porcentajeEscucharHablar ) return ['La propiedad valor es requerida', undefined];
        
        return [undefined, new CreateControlIdiomaDto(idIdioma, idEstudiante, porcentajeLectura, porcentajeEscritura, porcentajeEscucharHablar)];
    }
}