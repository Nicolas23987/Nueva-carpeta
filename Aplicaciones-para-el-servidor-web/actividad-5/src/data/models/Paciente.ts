
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../../data/sequelize/sequelize';

export class Paciente extends Model {
    public id!: number;
    public nombre!: string;
    public identificacion!: number;
}

Paciente.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'Nombre es requerido',
                },
            },
        },
        identificacion: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: {
                    msg: 'Identificación es requerida',
                },
            },
        },
    },
    {
        sequelize,               
        modelName: 'Paciente',   
        tableName: 'pacientes',  
        timestamps: false,       
    }
);

export default Paciente;
