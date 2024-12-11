



export class SignoVitalEntity {

    constructor(
        public id: number,
        public descripcion: number,
        public nivel_minimo: number,
        public nivel_maximo: number
    ){}


    public static fromObject ( object: {[key: string]: any}): SignoVitalEntity {
        const { id, descripcion, nivel_minimo, nivel_maximo } = object;
        if( !id ) throw 'ID es requerido'
        if ( !descripcion ) throw 'La descripcion es requerida'
        if( !nivel_minimo ) throw 'nivel_minimo es requerido'
        if( !nivel_maximo ) throw 'nivel_maximo es requerido'

        return new SignoVitalEntity(id, descripcion, nivel_minimo, nivel_maximo)
        
    }

}