<template>
      <v-app class="bg-grey-darken-4">
        {{ test  }}
      </v-app>
</template>

<script>
import postService from '@/service/postService';

export default {
    name: "MainPost",
    data: () => ({
        test: {}
    }),

    methods: {
        async getPosts() {
            const response = await postService.getPosts();
            const data = response.data;
            
            this.test = data;
        }
    },

    created() {
    this.getPosts();
  }
}

</script>