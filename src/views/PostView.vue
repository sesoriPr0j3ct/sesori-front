<template>
    <MainPost :postData="postData"/>
</template>

<script>
import postService from '@/service/postService';
import MainPost from '@/components/MainPost.vue';

export default {
    name: 'PostView',
    components: {
        MainPost,
    },
    data: () => ({
        postData: [],
    }),

    methods: {
        async getPosts() {
        const response = await postService.getPosts();
        this.postData = response.data;
        },
    },

    created() {
        this.getPosts();
    },
    };
</script>