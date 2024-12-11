import { Sequelize } from 'sequelize';
import { envs } from '../../config/envs';

const sequelize = new Sequelize(envs.MYSQL_URL,{
  dialect: 'mysql',                   
  logging: false,                     
});

export { sequelize };
