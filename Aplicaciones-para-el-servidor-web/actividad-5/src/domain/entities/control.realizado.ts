import Paciente from "../../data/models/Paciente";
import SignoVital from "../../data/models/SignoVital";
import { SignoVitalEntity } from "./signo.vital";

export class ControlRealizadoEntity {
    
    constructor(
        public id:number,
        public Paciente: Paciente,
        public SignoVital: SignoVital,
        public fecha: Date,
        public hora: Date,
        public valor: number,

    ){}

    public static fromObject( object: {[key: string]:any}): ControlRealizadoEntity{
        const { id, id_paciente, id_signo_vital, fecha, hora, valor } = object;
        const paciente  = object.Paciente;
        const signo_vital  = object.SignoVital;
        if ( !id ) throw 'Id es requerido';
        if ( !id_paciente ) throw 'id paciente es requerido';
        if ( !id_signo_vital ) throw 'id signo vital es requerido';
        if ( !paciente ) throw 'paciente es requerido';
        if ( !signo_vital ) throw 'signo vital es requerido';
        if ( !fecha ) throw 'hora es requerido';
        if ( !hora ) throw 'hora es requerido';
        if ( !valor === undefined ) throw 'valor es requerido';
        
            
        return new ControlRealizadoEntity(id, paciente, signo_vital, fecha, hora, valor)
    }

}