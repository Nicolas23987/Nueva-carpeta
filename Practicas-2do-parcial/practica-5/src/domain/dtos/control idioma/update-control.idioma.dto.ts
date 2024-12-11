
export class UpdateControlIdiomaDto {

    private constructor(
        public readonly id: number,
        public readonly id_estudiante: number,
        public readonly id_idioma: number,
        public readonly fecha: Date,
        public readonly hora: Date,
        public readonly valor: number
    ){}

    get values(){
        const returnObj: {[key: string]: any} = {}

        if ( this.fecha ) returnObj.fecha = this.fecha
        if ( this.id_estudiante ) returnObj.id_estudiante = this.id_estudiante
        if ( this.id_idioma ) returnObj.id_idioma = this.id_idioma
        if ( this.hora ) returnObj.hora = this.hora
        if ( this.valor ) returnObj.valor = this.valor

        return returnObj
    }


    static update(props: {[key: string]: any}): [string?, UpdateControlIdiomaDto?]{

        const { id, fecha, id_estudiante, id_idioma, hora, valor } = props


        if( !id ) return ['La propiedad id es requerida', undefined]

        return [undefined, new UpdateControlIdiomaDto(id, fecha, id_estudiante, id_idioma, hora, valor)]

    }


}