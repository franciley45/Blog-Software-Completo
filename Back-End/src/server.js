// src/server.js
const app = require('./app');

const PORT = 3000;

app.listen(PORT, async () => {
  console.log(`API louvor está sendo executada na porta ${PORT}`);

  // O código abaixo é para testarmos a comunicação com o MySQL
 /*  const [ result ] = await connection.execute('SELECT 1');
  if (result) {
    console.log('MySQL connection OK');
  } */

});