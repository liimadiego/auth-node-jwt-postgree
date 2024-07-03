import { Sequelize } from 'sequelize';
import { config as dotenvConfig } from 'dotenv';
import { resolve } from 'path';

const sequelize = new Sequelize(
    process.env.POSTGRESQL_DATABASE || 'green_metrics', 
    process.env.POSTGRESQL_USER || 'postgres',
    process.env.POSTGRESQL_PASSWORD || 'password',
    {
        host: process.env.POSTGRESQL_HOST || 'localhost',
        dialect: 'postgres',
    }
);

export default sequelize;