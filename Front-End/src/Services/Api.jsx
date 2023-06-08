import axios from "axios";
import { Await } from "react-router-dom";

export const api = axios.create({
  baseURL: "http://localhost:3000",
})

export const getAllDate = async () => {
 return await api.get('/milagres');
}

export const loginApi = async (email, password) => {
  try {
    return await api.post('/login', { email, password })
  } catch (error) {
    return error.response.data
  }
}