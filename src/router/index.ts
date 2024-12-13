import {createRouter, createWebHistory} from "vue-router";


const routes = [
    {
        path: '/',
        redirect: '/instant',
    },
    {
        path: '/instant',
        component: () => import('../layout/layout.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;