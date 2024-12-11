export class CreateInversionRealizadaDto {
    private constructor(
      public readonly id_inversionista: string, 
      public readonly id_concepto_de_inversion: string,
      public readonly valor_inversion: number,
      public readonly fecha: Date,
      public readonly duracion_de_inversion: number
    ) {}
  
    static create(props: { [key: string]: any }): [string?, CreateInversionRealizadaDto?] {
      const { id_inversionista, id_concepto_de_inversion, valor_inversion, fecha, duracion_de_inversion } = props;
  
      if (!id_inversionista) return ['La propiedad id_inversionista es requerida', undefined];
      if (!id_concepto_de_inversion) return ['La propiedad id_concepto_de_inversion es requerida', undefined];
      if (valor_inversion === undefined) return ['La propiedad valor_inversion es requerida', undefined];
      if (!fecha) return ['La propiedad fecha es requerida', undefined];
      if (duracion_de_inversion === undefined) return ['La propiedad duracion_de_inversion es requerida', undefined];
  
      return [undefined, new CreateInversionRealizadaDto(id_inversionista, id_concepto_de_inversion, valor_inversion, fecha, duracion_de_inversion)];
    }
  }
  