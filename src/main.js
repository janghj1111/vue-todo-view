import { createApp } from "vue";
import App from "./App.vue";

import "./assets/common.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import router from "@/router"; // vue router 설정
import axios from "axios";
import store from "@/store/store.js";

/* store.js 예제 */
console.log(store.state.count); // -> 0
store.commit("setIncrement");
console.log(store.state.count); // -> 1

const app = createApp(App); //0702 router 추가

/* axios 설정 */
// app.config.globalProperties.$axios = axios;
// 전역변수로 설정 컴포넌트에서 this.$axios 호출할 수 있음 //0705 axios 추가
app.provide("$axios", axios);

/* serverUrl 전역 설정 */
//app.config.globalProperties.$serverUrl = "//localhost:8082"; //api server
const serverUrl = "//localhost:9092";
app.provide("$serverUrl", serverUrl);

app.use(router);
app.use(store);
app.mount("#app"); //createApp(App).mount('#app')
