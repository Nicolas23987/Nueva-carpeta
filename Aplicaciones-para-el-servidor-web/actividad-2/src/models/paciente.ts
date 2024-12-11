import { Model, DataTypes } from 'sequelize';
import sequelize from '../conexion/conexion';

class Paciente extends Model {
    public id!: number;
    public nombre!: string;                
    public identificacion!: string;
}

Paciente.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    identificacion: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
}, {
    sequelize,
    modelName: 'Paciente',
    tableName: 'pacientes'
});

export default Paciente;
