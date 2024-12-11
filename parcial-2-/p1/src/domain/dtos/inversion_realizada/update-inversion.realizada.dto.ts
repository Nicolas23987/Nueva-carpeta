export class UpdateInversionRealizadaDto {

    private constructor(
        public readonly id: string,
        public readonly id_inversionista: string,
        public readonly id_concepto_de_inversion: string,
        public readonly valorInversion: number,
        public readonly fecha: Date,
        public readonly duracionDeInversion: number
    ) { }

    get values() {
        const returnObj: { [key: string]: any } = {};

        if (this.id_inversionista) returnObj.inversionista = this.id_inversionista;
        if (this.id_concepto_de_inversion) returnObj.conceptoDeInversion = this.id_concepto_de_inversion;
        if (this.valorInversion) returnObj.valorInversion = this.valorInversion;
        if (this.fecha) returnObj.fecha = this.fecha;
        if (this.duracionDeInversion) returnObj.duracionDeInversion = this.duracionDeInversion;

        return returnObj;
    }

    static update(props: { [key: string]: any }): [string?, UpdateInversionRealizadaDto?] {
        const { id, id_inversionista, id_concepto_de_inversion, valorInversion, fecha, duracionDeInversion } = props;

        if (!id) return ['La propiedad id es requerida', undefined];

        return [
            undefined,
            new UpdateInversionRealizadaDto(
                id,
                id_inversionista,
                id_concepto_de_inversion,
                valorInversion,
                fecha,
                duracionDeInversion
            ),
        ];
    }
}
