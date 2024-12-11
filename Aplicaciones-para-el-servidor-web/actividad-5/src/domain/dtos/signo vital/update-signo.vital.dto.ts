


export class UpdateSignoVitalDto {
    private constructor(
        public readonly id: number,
        public readonly descripcion?: string,
        public readonly nivel_minimo?: number,
        public readonly nivel_maximo?: number
    ){}

    get values() {
        const returnObj: { [key: string]: any } = {};

        if (this.descripcion) returnObj.descripcion = this.descripcion;
        if (this.nivel_minimo !== undefined) returnObj.nivel_minimo = this.nivel_minimo;
        if (this.nivel_maximo !== undefined) returnObj.nivel_maximo = this.nivel_maximo;

        return returnObj;
    }


    static update(props: {[key: string]: any}): [string?, UpdateSignoVitalDto?] {
        const { id, descripcion, nivel_minimo, nivel_maximo } = props;
        
        if ( !id ) return ['id es requerido', undefined];

        return [undefined, new UpdateSignoVitalDto(id, descripcion, nivel_minimo, nivel_maximo)];
    }

}