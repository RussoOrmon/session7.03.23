import axios from "axios";

const BASE_URL="https://reqres.in/api"

const header = { "Content-Type": "application/json",
Authorization:`Bearer ${'token'} `
 };

 export const axiosInstance= axios.create({
    baseURL: BASE_URL,
    header,
 })