<template>
  <v-app color="background">
    <v-main>
       <router-view/>
       <Login></Login>
    </v-main>
  </v-app>
</template>

<script>
import Login from "./components/LoginForm.vue"

export default {
  name: 'App',

  components: {
    Login,
  },

  data: () => ({
    //
  }),
}
</script>

<style>

</style>