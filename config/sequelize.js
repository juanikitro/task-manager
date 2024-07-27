import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE,
  'root',
  process.env.MYSQL_ROOT_PASSWORD,
  {
    host: 'mysql',
    port: '3306',
    dialect: 'mysql',
  },
);

export default sequelize;
