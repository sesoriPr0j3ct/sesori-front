import apiClient from "./api";

const urlPreFix = "/auth"

export default {
    login(loginData) {
        return apiClient.post(`${urlPreFix}/login`, loginData)
    }
    // login(loginData) {
    //     return apiClient.post(`${urlPreFix}/login`, loginData, {
    //         withCredentials: true // 쿠키를 포함한 요청
    //     });
    // }
}