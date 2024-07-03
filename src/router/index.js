import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path : '/',
        name : 'PageHome',
        component : () => import('@/views/board/PageHome.vue'),
    },
    {
        path : '/about',
        name : 'About',
        meta: { authRequired : true },
        component : () => import('@/views/board/PageAbout.vue'),
    },
    {
        path : '/board/list',
        name : 'BoardList',
        component : () => import('@/views/board/BoardList.vue'),
    }
]

// vue router 공식임. 외우셈.
const router = createRouter({
    history : createWebHistory(process.env.BASE_URL), // createWebHistory는 url에 #을 지움. 괄호 안은 url의 기본주소
    routes
});

//to : 이동할 url, from : 현재 url , next : to로 넘어가기 위해 실행되어야 할 함수
router.beforeEach((to)=>{ // (to, from, next) // to와 from은 routes배열원소(오브젝트)임. 
    console.log('네비게이션 가드'); 
    console.log(to);
    if(to.matched.some(item => { return item.meta.authRequired;})){
        alert('로그인 후 이용해주세요.');
    } else {
        console.log('인증 성공');
    }
})

export default router
