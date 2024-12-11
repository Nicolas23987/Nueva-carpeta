

export class CreatePacienteDto {
    private constructor(
        public readonly nombre: string,
        public readonly identificacion: number
    ){}

    static create(props: {[key: string]: any} ): [string?, CreatePacienteDto?] {
        const { nombre, identificacion } = props

        if ( !nombre ) return ['La propiedad nombre es requerida'];
        if ( !identificacion ) return ['La propiedad identificacion es requerida'];

        return [undefined, new CreatePacienteDto(nombre, identificacion)]
    }
}