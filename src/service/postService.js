import apiClient from "./api";

const urlPreFix = "/post"

export default {
    getPosts() {
        return apiClient.get(`${urlPreFix}/lists`);
    },

    getPostDetail(postIdx) {
        return apiClient.get(`${urlPreFix}/view/${postIdx}`)
    },

    CreatePost(post) {
        return apiClient.post(`${urlPreFix}/create`, post)
    }
}