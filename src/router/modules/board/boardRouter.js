
const boardRouter = [
    {
        path : '/board/list',
        name : 'BoardList',
        component : () => import('@/views/board/BoardList.vue'),
    },
    {
        path : '/board/detail',
        name : 'BoardDetail',
        component : () => import('@/views/board/BoardDetail.vue'),
    },
    {
        path: '/board/write',
        name: 'BoardWrite',
        component : () => import('@/views/board/BoardWrite.vue'),
    },
];

export default boardRouter;