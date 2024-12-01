<template>
  <v-app color="background">
    <v-main>
       <MainPost/>
    </v-main>
  </v-app>
</template>

<script>
import MainPost from './components/MainPost.vue';

export default {
  name: 'App',

  components: {
    HelloWorld,
    MainPost,
  },

  data: () => ({
    //
  }),
}
</script>

<style>

</style>