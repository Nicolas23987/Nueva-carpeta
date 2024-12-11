import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../../data/sequelize/sequelize';

export class SignoVital extends Model {
    public id!: number;
    public descripcion!: string;
    public nivel_minimo!: number;
    public nivel_maximo!: number;
}

SignoVital.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'La descripcion es requerida',
                },
            },
        },
        nivel_minimo: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'nivel_minimo es requerido',
                },
                isFloat: {
                    msg: 'nivel_minimo debe ser un número',
                },
            },
        },
        nivel_maximo: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'nivel_maximo es requerido',
                },
                isFloat: {
                    msg: 'nivel_maximo debe ser un número',
                },
            },
        },
    },
    {
        sequelize,                
        modelName: 'SignoVital', 
        tableName: 'signos_vitales',
        timestamps: false,      
    }
);

export default SignoVital;
