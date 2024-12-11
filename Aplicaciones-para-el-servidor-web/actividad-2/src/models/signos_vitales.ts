import { Model, DataTypes } from 'sequelize';
import sequelize from '../conexion/conexion';

class Signos_vitales extends Model {
    public id!: number;
    public descripcion!: string;
    public nivel_min!: number; 
    public nivel_max!: number; 
}

Signos_vitales.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nivel_min: {
        type: DataTypes.INTEGER, 
        allowNull: false,
    },
    nivel_max: {
        type: DataTypes.INTEGER, 
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Signos_vitales', 
    tableName: 'signos_vitales',
});

export default Signos_vitales;
