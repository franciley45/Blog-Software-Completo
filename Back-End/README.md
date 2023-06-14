# Projeto-Pessoal-Back-End

Olá esse é um projeto pessoal feito do zero por mim totalmente funcional, o projeto mostra um pouco dos conhecimento adquiridos em Back-End na Trybe Tecnologias utilizadas: JavaScript, NodeJS, API Rest, MYSQL, Express, Mocha, Chai, Sinon, JsonWebToken, Arquitetura MSC, Docker é Docker-Compose. Se trata de blog só com o back-end tem um banco de dados que se chama Espirito Santo que possui duas tabelas user é posts, o projeto está 100% coberto por testes unitário, todas as autenticações devidamente feitas é com CRUD completo.
<details>

---
  
  <summary><strong>👨‍💻 Clone o repositório</strong></summary><br />

1. Clone o repositório
  * `git@github.com:franciley45/Blog-Software-Completo.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd Projeto-pessoal-Back-End`
    * `docker-compose up -d`
2.  Entre no conteiner de imagem Node é instale as dependências 
    * `docker exec -it nome-do-conteiner bash`
    * `npm install` 
    * `npm start` ou `npm run dev`

3.  Crie o banco de dados utilizando o MySQL Workbench. Depois de fazer o login, copie o migration.sql e execute-o dentro do MySQL Workbench.
    * `Username: root`
    * `Password: password`
    * `Port: 3306`
    * `migration.sql`

4.  Comando test de cobertura mocha
    * `npm run test:mocha`

5.  Corpo da requisição usuario, POST rota http://localhost:3000/user/
    * `{
       "name": "user1",
       "email": "user15@gmail.com",
       "password": "123"
       }`

6.  Corpo da requisição post, POST ou PUT rota http://localhost:3000/milagres/
    * `{ 
       "title": "deus",
       "date": "2022-12-21T19:02:55.000Z",
       "milagres": "salvação é perdão"
       }`
      
7.  Corpo da requisição login, POST rota http://localhost:3000/login/
    * `{
       "email": "user1@gmail.com",
       "password": "123"
       }`
