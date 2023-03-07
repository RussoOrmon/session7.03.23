import { axiosInstance } from "../config/axiosInstance"

export const LoginReq = (data) =>{
    return axiosInstance.post('/login', data)
};