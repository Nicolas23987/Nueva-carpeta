




export class CreateControlRealizadoDto{

    private constructor(
        public readonly id_signo_vital: number,
        public readonly id_paciente: number,
        public readonly fecha: Date,
        public readonly hora: Date,
        public readonly valor: number
    ){}

    static create ( props: {[key: string]: any} ): [string?, CreateControlRealizadoDto?] {
        const { id_signo_vital, id_paciente, fecha, hora, valor } = props
        if ( !id_signo_vital ) return ['La propiedad id_signo_vital es requerida', undefined];
        if ( !id_paciente ) return ['La propiedad id_paciente es requerida', undefined];
        if ( !fecha ) return ['La propiedad fecha es requerida', undefined];
        if ( !hora ) return ['La propiedad hora es requerida', undefined];
        if ( !valor === undefined ) return ['La propiedad valor es requerida', undefined];
        
        return [undefined, new CreateControlRealizadoDto(id_signo_vital, id_paciente, fecha, hora, valor)];
    }
}