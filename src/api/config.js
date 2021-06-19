import axios from "axios";
export const baseUrl = "http://47.97.249.134:3000";
// axios的实例以及拦截器配置
const axiosInstance = axios.create({
    baseURL: baseUrl
})

axiosInstance.interceptors.response.use(
    res => res.data,
    err => {
        console.log("网络错误", err)
    }
)

export { axiosInstance }