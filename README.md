# Projeto-Pessoal-Back-End

Olá esse é um projeto pessoal feito do zero por mim totalmente funcional, o projeto mostra um pouco dos conhecimento adquiridos em Back-End na Trybe Tecnologias utilizadas: JavaScript, NodeJS, API Rest, MYSQL, Express, Mocha, Chai, Sinon, JsonWebToken, Arquitetura MSC, Docker é Docker-Compose. Se trata de blog só com o back-end tem um banco de dados que se chama Espirito Santo que possui duas tabelas user é posts, o projeto está 100% coberto por testes unitário, todas as autenticações devidamente feitas é com CRUD completo.
<details>

---
  
  <summary><strong>👨‍💻 Clone o repositório</strong></summary><br />

1. Clone o repositório
  * `git clone git@github.com:franciley45/Projeto-Pessoal-Back-End.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd Projeto-pessoal-Back-End`
    * `docker-compose up -d`
2.  Entre no conteiner de imagem Node é instale as dependências 
    * `docker exec -it nome-do-conteiner bash`
    * `npm install` 
    * `npm start` ou `npm run dev`

3.  Comando test de cobertura mocha
    * `npm run test:mocha`

4.  Corpo da requisição usuario, POST rota http://localhost:3000/user/
    * `{
       "name": "user1",
       "email": "user15@gmail.com",
       "password": "123"
       }`

5.  Corpo da requisição post, POST ou PUT rota http://localhost:3000/milagres/
    * `{
       "name": "deus",
       "email": "deus@gmail.com",
       "date": "2022-12-21T19:02:55.000Z",
       "miracle": "salvação é perdão"
      }`
      
5.  Corpo da requisição login, POST rota http://localhost:3000/login/
    * `{
       "email": "user1@gmail.com",
       "password": "123"
       }`
