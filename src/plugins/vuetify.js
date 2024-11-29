// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
// Vuetify 설정 파일
import { createVuetify } from 'vuetify';
import 'vuetify/styles';

export default createVuetify({
  theme: {
    defaultTheme: 'dark', // 기본 테마를 light로 설정
    themes: {
      light: {
        dark: false,
        colors: {
          background: '#ffffff',
          surface: '#f5f5f5',
          primary: '#1976D2',
          secondary: '#FF5722',
        },
      },
      dark: {
        dark: true,
        colors: {
          background: '#121212',
          surface: '#212121',
          primary: '#BB86FC',
          secondary: '#03DAC6',
        },
      },
    },
  },
});

