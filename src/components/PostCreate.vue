<template>
    <v-text-field v-model="postTitle" label="제목">
    </v-text-field>
    <v-text-field v-model="postText" label="본문" variant="outlined"></v-text-field>

    <h3>테스트 로그인 구현하면 수정</h3>
    <v-text-field v-model="userIdx" label="test유저아이디"></v-text-field>
    <v-btn @click="createPost">
        딸깍
    </v-btn>
</template>

<script>
import postService from '@/service/postService';

export default {
    name: "PostCreate",
    data: () => ({
        postTitle: '',
        postText: '',
        userIdx: '',
    }),

    methods: {
        async createPost() {
            const newPost = {"userIdx": this.userIdx, "contentTitle": this.postTitle, "contentText": this.postText}
            await postService.createPost(newPost)
        }
    }
}
</script>

