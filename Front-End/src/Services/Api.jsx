import axios from "axios";


const HOST = import.meta.env.VITE_REACT_API_URL;

 /* const HOST ="https://blog-software-completo.vercel.app"; */



export const api = axios.create({
  baseURL: `${HOST}`,
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