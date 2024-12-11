export class InversionRealizadaEntity {
    constructor(
      public id: string,
      public inversionista: { id: string; nombre: string; identificacion: string },
      public conceptoDeInversion: { id: string; concepto: string; detalle: string },
      public valorInversion: number,
      public fecha: Date,
      public duracionDeInversion: number
    ) {}
  
    public static fromObject(object: { [key: string]: any }): InversionRealizadaEntity {
      const {
        id,
        inversionista,
        conceptoDeInversion,
        valorInversion,
        fecha,
        duracionDeInversion
      } = object;
  
      if (!id && id !== 0) throw new Error("El campo 'id' es requerido.");
      if (!inversionista) throw new Error("El campo 'inversionista' es requerido.");
      if (!inversionista.id || !inversionista.nombre || !inversionista.identificacion) {
        throw new Error("El inversionista debe tener 'id', 'nombre' y 'identificacion'.");
      }
      if (!conceptoDeInversion) throw new Error("El campo 'conceptoDeInversion' es requerido.");
      if (!conceptoDeInversion.id || !conceptoDeInversion.concepto || !conceptoDeInversion.detalle) {
        throw new Error("El concepto de inversión debe tener 'id', 'concepto' y 'detalle'.");
      }
      if (valorInversion === undefined || valorInversion <= 0) {
        throw new Error("El 'valorInversion' es requerido y debe ser mayor a 0.");
      }
      if (!fecha) throw new Error("El campo 'fecha' es requerido.");
      if (duracionDeInversion === undefined || duracionDeInversion <= 0) {
        throw new Error("La 'duracionDeInversion' es requerida y debe ser mayor a 0.");
      }
  
      return new InversionRealizadaEntity(
        id,
        inversionista,
        conceptoDeInversion,
        valorInversion,
        fecha,
        duracionDeInversion
      );
    }
  }
  