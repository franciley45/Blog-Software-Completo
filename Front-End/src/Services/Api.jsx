import axios from "axios";
import { Await } from "react-router-dom";

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

export const loginApi = async (email, password) => {
  try {
    return await api.post('/login', { email, password })
  } catch (error) {
    return error.response.data
  }
}