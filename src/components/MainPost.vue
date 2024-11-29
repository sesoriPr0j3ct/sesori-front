<template>
    <v-container color="" class="custom-container">
    <!-- <v-container id="container"> -->
      {{ test }}
      <v-table>
        <thead>
          <tr>
            <th>No.</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
            <th>추천수</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in test" :key="item.postIdx">
            <td>{{ item.postIdx }}</td>
            <td>{{ item.contentTitle }}</td>
            <td>{{ item.userName }}</td>
            <td>{{ item.createdAt }}</td>
            <td>{{ item.likeCount }}</td>
            <td>{{ item.viewCount }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-container>
  </template>
  
  
  <script>
  import postService from '@/service/postService';
  
  export default {
    name: 'MainPost',
    data: () => ({
      test: [],
    }),
  
    methods: {
      async getPosts() {
        const response = await postService.getPosts();
        this.test = response.data;
      },
    },
  
    created() {
      this.getPosts();
    },
  };
  </script>
  
  <style scoped>
  .custom-container {
    background-color: rgb(var(--v-theme-primary));
    color: rgba(var(--v-theme-on-primary));
    padding: 16px;
  }

  #container {
  background-color: rgb(var(--v-theme-primary));
  color: rgba(var(--v-theme-on-primary), 0.8);
}
  </style>
  