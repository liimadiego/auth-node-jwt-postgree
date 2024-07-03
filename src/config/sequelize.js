module.exports = {
  development: {
    username: process.env.POSTGRESQL_USER || 'postgres',
    password: process.env.POSTGRESQL_PASSWORD || 'password',
    database: process.env.POSTGRESQL_DATABASE || 'green_metrics',
    host: process.env.POSTGRESQL_HOST || 'localhost',
    dialect: 'postgres'
  },
  test: {
    username: process.env.POSTGRESQL_USER || 'postgres',
    password: process.env.POSTGRESQL_PASSWORD || 'password',
    database: process.env.POSTGRESQL_DATABASE_TEST || 'green_metrics_test',
    host: process.env.POSTGRESQL_HOST || 'localhost',
    dialect: 'postgres'
  },
  production: {
    username: process.env.POSTGRESQL_USER || 'postgres',
    password: process.env.POSTGRESQL_PASSWORD || 'password',
    database: process.env.POSTGRESQL_DATABASE_PROD || 'green_metrics_production',
    host: process.env.POSTGRESQL_HOST || 'localhost',
    dialect: 'postgres'
  }
};