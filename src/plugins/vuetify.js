import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
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
          tertiary: '#FF5722',
        },
      },
      dark: {
        dark: true,
        colors: {
          background: '#121212',
          surface: '#212121',
          primary: '#424242',
          secondary: '#616161',
          tertiary: '#757575',
        },
      },
    },
  },
});

