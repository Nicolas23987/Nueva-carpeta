import { Sequelize } from 'sequelize';

// Configura tus credenciales de la base de datos
const sequelize = new Sequelize('web', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

export default sequelize;
