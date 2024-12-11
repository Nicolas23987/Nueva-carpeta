



export class PacienteEntity {
    
    
    constructor(
        public id:number,
        public nombre:string,
        public identificacion:number
    ){}

    public static fromObject( object: {[key: string]:any}): PacienteEntity{
        const { id, nombre, identificacion } = object;
        if ( !id ) throw 'Id es requerido';
        if ( !nombre ) throw 'nombre es requerido'
        if ( !identificacion ) throw 'identificacion es requerida'

        return new PacienteEntity(id, nombre, identificacion)

    }



}