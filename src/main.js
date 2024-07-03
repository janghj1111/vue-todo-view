import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // vue router 설정 
import './assets/common.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
 
//createApp(App).mount('#app')
//0702 router 추가
const app = createApp(App)
app.use(router).mount('#app') 
