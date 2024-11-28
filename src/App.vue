<template>
  <v-app>
    <v-main>
      <!-- <HelloWorld/> -->
       <MainPost/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
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
