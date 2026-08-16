import axios from "axios";


export const api = new axios.create({
    baseURL: import.meta.env.SERVER_URL
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
