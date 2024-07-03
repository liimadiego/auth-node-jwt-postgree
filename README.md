<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <h1>Backend Node.js com TypeScript, Express, JWT e PostgreSQL</h1>
    <p>Este projeto é um backend desenvolvido com Node.js, TypeScript e Express, utilizando JWT para autenticação e PostgreSQL como banco de dados. O projeto inclui rotas para criar, editar e consultar usuários, além de uma rota para criar tokens de autenticação. Também estão incluídas migrations e seeds para o banco de dados, e testes unitários com Jest.</p>
    
    <h2>Instalação</h2>
    <pre><code>npm install</code></pre>
    
    <h2>Configuração</h2>
    <p>Crie um arquivo <code>.env</code> na raiz do projeto com as seguintes variáveis:</p>
    <pre><code>DATABASE_URL=postgresql://user:password@localhost:5432/mydatabase
JWT_SECRET=your_jwt_secret
PORT=3000
</code></pre>
    
    <h2>Scripts</h2>
    <ul>
        <li><code>npm run dev</code>: Inicia o servidor em modo de desenvolvimento.</li>
        <li><code>npm run build</code>: Compila o projeto TypeScript.</li>
        <li><code>npm start</code>: Inicia o servidor com o código compilado.</li>
        <li><code>npm run test</code>: Executa os testes unitários com Jest.</li>
        <li><code>npm run migrate</code>: Executa as migrations do banco de dados.</li>
        <li><code>npm run seed</code>: Popula o banco de dados com dados iniciais.</li>
    </ul>
    
    <h2>Endpoints</h2>
    <h3>Usuários</h3>
    <ul>
        <li><code>POST /users</code>: Cria um novo usuário.</li>
        <li><code>GET /users/:id</code>: Retorna um usuário pelo ID.</li>
        <li><code>PUT /users/:id</code>: Atualiza um usuário pelo ID.</li>
    </ul>
    
    <h3>Autenticação</h3>
    <ul>
        <li><code>POST /auth/login</code>: Cria um token de autenticação JWT.</li>
    </ul>
    
    <h2>Exemplo de Requisição</h2>
    <h3>Criar Usuário</h3>
    <pre><code>POST /users
Content-Type: application/json
{
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "password123"
}</code></pre>
    
    <h3>Autenticação</h3>
    <pre><code>POST /auth/login
Content-Type: application/json
{
    "email": "john.doe@example.com",
    "password": "password123"
}</code></pre>
    
    <h2>Testes</h2>
    <p>Os testes unitários são escritos utilizando Jest. Para executá-los, use o comando:</p>
    <pre><code>npm run test</code></pre>
    
    <h2>Contribuição</h2>
    <p>Contribuições são bem-vindas! Por favor, abra uma issue ou envie um pull request.</p>
</body>
</html>