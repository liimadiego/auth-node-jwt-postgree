# Backend Node.js com TypeScript, Express, JWT e PostgreSQL

Este projeto é um backend desenvolvido com Node.js, TypeScript e Express, utilizando JWT para autenticação e PostgreSQL como banco de dados. O projeto inclui rotas para criar, editar e consultar usuários, além de uma rota para criar tokens de autenticação. Também estão incluídas migrations e seeds para o banco de dados, e testes unitários com Jest.

## Instalação

```bash
npm install

# Configuração
Copie o arquivo .env_example na raiz do projeto e renomeie para .env
Preencha com as credencias de banco e JWT

```

## Scripts

```bash
npm run build: Compila o projeto TypeScript.
npm start: Inicia o servidor com o código compilado.
npm run dev: Inicia o servidor em modo de desenvolvimento usando ts-node-dev para recarregar automaticamente as alterações.
npm run test: Executa os testes unitários com Jest.
npm run migrate: Executa as migrations do banco de dados usando o Sequelize CLI.
npm run seed: Popula o banco de dados com dados iniciais usando o Sequelize CLI.
```

### Endpoints

```bash
#Usuários
POST /users: Cria um novo usuário.
GET /users/:id: Retorna um usuário pelo ID.
PUT /users/:id: Atualiza um usuário pelo ID.

#Autenticação
POST /auth/login: Cria um token de autenticação JWT.
```

### Contribuição

```bash
Contribuições são bem-vindas! Por favor, abra uma issue ou envie um pull request.
```
