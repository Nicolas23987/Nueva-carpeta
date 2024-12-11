



export class CreateSignoVitalDto {
    private constructor (
        public readonly descripcion: string,
        public readonly nivel_minimo: number,
        public readonly nivel_maximo: number
    ){}

    static create(props: {[key: string]: any}):[string?, CreateSignoVitalDto?]{
        const { descripcion, nivel_minimo, nivel_maximo } = props;
        if ( !descripcion ) return ['La propiedad descripcion es requerida']
        if ( !nivel_minimo ) return ['La propiedad nivel minimo es requerida']
        if ( !nivel_maximo ) return ['La propiedad nivel maximo es requerida']

        return [undefined, new CreateSignoVitalDto(descripcion, nivel_minimo, nivel_maximo)]
    }

}

