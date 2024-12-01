import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import '@/assets/styles/theme.css'
import router from './router';


loadFonts()

createApp(App).use(router)
  .use(vuetify)
  .mount('#app')
