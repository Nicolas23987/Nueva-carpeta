import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../data/sequelize/sequelize';
import Paciente from './Paciente';
import SignoVital from './SignoVital';

class ControlRealizado extends Model {
    public id!: number;
    public id_paciente!: number;
    public id_signo_vital!: number;
    public fecha!: Date;
    public hora!: string;
    public valor!: number;
}

ControlRealizado.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        id_paciente: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Paciente,
                key: 'id',
            },
        },
        id_signo_vital: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: SignoVital,
                key: 'id',
            },
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        hora: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        valor: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'Control_Realizado',
    }
);

Paciente.hasMany(ControlRealizado, {
    foreignKey: 'id_paciente',
});
SignoVital.hasMany(ControlRealizado, {
    foreignKey: 'id_signo_vital',
});
ControlRealizado.belongsTo(Paciente, {
    foreignKey: 'id_paciente',
});
ControlRealizado.belongsTo(SignoVital, {
    foreignKey: 'id_signo_vital',
});

export default ControlRealizado;
