import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3000",
})

export const getAllDate = async () => {
    api.get('/milagres')
  .then(function (response) {
    // aqui acessamos o corpo da resposta:
    console.log(response.data);
  })
  .catch(function (error) {
    // aqui temos acesso ao erro, quando alguma coisa inesperada acontece:
    console.log(error);
  })
}
