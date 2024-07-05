import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // vue router 설정 
import axios from 'axios'
import './assets/common.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
 
//createApp(App).mount('#app')
const app = createApp(App) //0702 router 추가
app.config.globalProperties.$axios = axios;  //전역변수로 설정 컴포넌트에서 this.$axios 호출할 수 있음  // //0705 axios 추가
app.config.globalProperties.$serverUrl = '//localhost:8082' //api server
app.use(router).mount('#app') 
