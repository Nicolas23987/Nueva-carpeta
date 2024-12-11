import { Model, DataTypes } from 'sequelize';
import sequelize from '../conexion/conexion';
import Paciente from './paciente'; 
import Signos_vitales from './signos_vitales'; 

class ControlSalud extends Model {
    public id!: number;
    public pacienteId!: number; 
    public signoVitalId!: number; 
    public fecha!: Date; 
    public hora!: string; 
    public valor!: string;
}

ControlSalud.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    pacienteId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Paciente,
            key: 'id',
        },
    },
    signoVitalId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Signos_vitales,
            key: 'id',
        },
    },
    fecha: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    hora: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    valor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'ControlSalud',
    tableName: 'controlSalud',
});





ControlSalud.belongsTo(Paciente, {
    foreignKey: 'pacienteId', 
    targetKey: 'id',
});

Paciente.hasMany(ControlSalud, {
    foreignKey: 'pacienteId',
});

ControlSalud.belongsTo(Signos_vitales, {
    foreignKey: 'signoVitalId', 
    targetKey: 'id',
});

export default ControlSalud;
