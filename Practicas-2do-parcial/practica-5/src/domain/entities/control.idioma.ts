import { Estudiante } from "../../data/models/Estudiante";
import { Idioma } from "../../data/models/Idioma";

export class ControlIdiomaEntity {

    constructor(
        public estudiante: Estudiante,
        public idioma: Idioma,
        public porcentajeLectura: number,
        public porcentajeEscritura: number,
        public porcentajeEscucharHablar: number,
    ) { }

    public static fromObject(object: { [key: string]: any }): ControlIdiomaEntity {
        const { id, estudiante, idioma, porcentajeLectura, porcentajeEscritura, porcentajeEscucharHablar } = object;
        if (!id) throw 'La propiedad id es requerido';
        if (!estudiante) throw 'La propiedad id_estudante es requerido';
        if (!idioma) throw 'La propuedad id_idioma es requerido';
        if (porcentajeLectura === null) throw 'La propiedad porcentajeLectura es requerido';
        if (porcentajeEscritura === null) throw 'La propiedad porcentajeEscritura es requerido';
        if (!porcentajeEscucharHablar) throw 'La propiedad porentajeEscuchaHablar es requerida';


        return new ControlIdiomaEntity( 
            estudiante,
            idioma,
            porcentajeLectura,
            porcentajeEscritura,
            porcentajeEscucharHablar
        )
    }
}