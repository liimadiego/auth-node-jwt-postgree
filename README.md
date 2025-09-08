# Node.js backend with TypeScript, Express, JWT, and PostgreSQL

This project is a backend developed with Node.js, TypeScript, and Express, using JWT for authentication and PostgreSQL as the database. The project includes routes for creating, editing, and querying users, as well as a route for creating authentication tokens. Also included are migrations and seeds for the database, and unit tests with Jest.

## Installation

```bash
npm install

# Configuration
Copy the .env_example file to the project root and rename it to .env.
Fill in the database credentials and JWT.

```

## Scripts

```bash
npm run build: Compiles the TypeScript project.
npm start: Starts the server with the compiled code.
npm run dev: Starts the server in development mode using ts-node-dev to automatically reload changes.
npm run test: Runs unit tests with Jest.
npm run migrate: Runs database migrations using the Sequelize CLI.
npm run seed: Populates the database with initial data using the Sequelize CLI.
```

### Endpoints

```bash
#Users
POST /users: Creates a new user.
GET /users/:id: Returns a user by ID.
PUT /users/:id: Updates a user by ID.

#Authentication
POST /auth/login: Creates a JWT authentication token.
```
