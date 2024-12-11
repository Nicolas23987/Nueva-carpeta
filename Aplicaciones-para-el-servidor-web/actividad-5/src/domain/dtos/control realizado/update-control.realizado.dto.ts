
export class UpdateControlRealizadoDto {

    private constructor(
        public readonly id: number,
        public readonly id_paciente: number,
        public readonly id_signo_vital: number,
        public readonly fecha: Date,
        public readonly hora: Date,
        public readonly valor: number
    ){}

    get values(){
        const returnObj: {[key: string]: any} = {}

        if ( this.fecha ) returnObj.fecha = this.fecha
        if ( this.id_paciente ) returnObj.id_paciente = this.id_paciente
        if ( this.id_signo_vital ) returnObj.id_signo_vital = this.id_signo_vital
        if ( this.hora ) returnObj.hora = this.hora
        if ( this.valor ) returnObj.valor = this.valor

        return returnObj
    }


    static update(props: {[key: string]: any}): [string?, UpdateControlRealizadoDto?]{

        const { id, fecha, id_paciente, id_signo_vital, hora, valor } = props


        if( !id ) return ['La propiedad id es requerida', undefined]

        return [undefined, new UpdateControlRealizadoDto(id, fecha, id_paciente, id_signo_vital, hora, valor)]

    }


}