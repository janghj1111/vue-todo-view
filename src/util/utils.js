import router from "@/router"
//import { useRouter } from 'vue-router';
//const router = useRouter(); 
// use컴포저블은 script setup함수안에서 쓰지 js에서는 그냥 라우터를 임포트해야 사용할 수 있다.

const goPage = ( path, params, redirectYn = 'N' ) => {
    console.log('path : ' + path);
    console.log(params)

    redirectYn != 'Y' 
        ? router.push({ path : path, query : params })     // 페이지 이동
        : router.replace({ path : path, query : params })  // 히스토리 초기화
}

export {
    goPage
}