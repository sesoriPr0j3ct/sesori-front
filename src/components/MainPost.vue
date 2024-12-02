<template>
    <v-table class="theme-surface">
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
        <tr v-for="item in postData" :key="item.postIdx">
          <td>{{ item.postIdx }}</td>
          <td @click="navigateTo(item.postIdx)">{{ item.contentTitle }}</td>
          <td>{{ item.userName }}</td>
          <td>{{ item.createdAt }}</td>
          <td>{{ item.likeCount }}</td>
          <td>{{ item.viewCount }}</td>
        </tr>
      </tbody>
    </v-table>
  </template>
  
  
<script>
export default {
    name: 'MainPost',
    props: {
        postData: {
            type: Object,
            required: true
        },
    },
    methods: {
      navigateTo(postIdx) {
        this.$router.push(`/post/${postIdx}`);
      },
  },

};
</script>

