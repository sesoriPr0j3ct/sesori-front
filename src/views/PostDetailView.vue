<template>
  {{ postData }}
</template>

<script>
import postService from '@/service/postService';

export default {
  name: 'PostDetailView',
  components: {
  },
  data: () => ({
      postData: [],
  }),

  methods: {
      async getPostsDetail() {
      const postIdx = this.$route.params.postIdx
      const response = await postService.getPostDetail(postIdx);
      this.postData = response.data;
      },
  },

  created() {
      this.getPostsDetail();
  },
};
</script>