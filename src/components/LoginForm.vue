<template>
    <v-text-field v-model="email" label="이메일"></v-text-field>
    <v-text-field v-model="passwd" label="패스워드"></v-text-field>
    <v-btn @click="login">
        딸깍
    </v-btn>
</template>

<script>
import userService from '@/service/userService';

export default {
    name: "LoginForm",
    data: () => ({
        email: '',
        passwd: '',
    }),

    methods: {
        async login() {
            const loginData = { "userEmail": this.email, "userPasswd": this.passwd };
            const response = await userService.login(loginData);

            const token = response.headers['authorization']?.split(' ')[0];
            if (token) {
                try {
                    localStorage.setItem('jwtToken', token); // 토큰 저장
                    console.log('JWT token stored:', token); // 콘솔 로그로 확인
                } catch (e) {
                    console.error('Error saving token to localStorage:', e);
                }
            }
        }
    }

}

</script>