import apiClient from "./api";

const urlPreFix = "/post"

export default {
    getPosts() {
        return apiClient.get(`${urlPreFix}/lists`);
    },

    getPostDetail(postIdx) {
        return apiClient.get(`${urlPreFix}/view/${postIdx}`)
    },


}