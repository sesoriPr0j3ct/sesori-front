import apiClient from "./api";

const urlPreFix = "/auth"

export default {
    login(loginData) {
        return apiClient.post(`${urlPreFix}/login`, loginData, {
            withCredentials: true})
        }
}