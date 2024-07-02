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
        component : () => import('@/views/board/PageAbout.vue'),
    },
    {
        path : '/board',
        name : 'Board',
        component : () => import('@/views/board/PageBoard.vue'),
    }
]