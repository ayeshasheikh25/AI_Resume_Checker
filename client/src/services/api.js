import axios from "axios";


export const api = new axios.create({
    baseURL: 'http://localhost:3000'
})

api.interceptors.response.use(
    (response)=>response,
    (err)=>{
        if(err.response.status == 401){
            localStorage.removeItem('user')
            window.location.href='/login'
        }
        return Promise.reject(err)
    }
)