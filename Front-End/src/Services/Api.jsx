import axios from "axios";

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

export const registerUserApi = async (name, email, password) => {
  try {
    return await api.post("/user", { name, email, password })
  } catch (error) {
    return error.response.data
  }
}

export const postApi = async (title, date, milagres, token) => {
  try {
    return await api.post("/milagres", { title, date, milagres }, {
      headers: {
        'Authorization': token
      }
    })
  } catch (error) {
    return error.response.data
  }
}