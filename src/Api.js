import  axios  from "axios";

const api = axios.create({
    baseURL: 'https://github.com/gustavo-gomess/Github-profile.git'
})

export default api