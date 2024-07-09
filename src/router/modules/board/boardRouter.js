
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
];

export default boardRouter;