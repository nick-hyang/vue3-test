import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
// import Home from '@/views/home.vue'
import Staff from '@/views/dashboard/staff.vue'
import { userPages } from '@/router/modules/user'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'staff',
        component: Staff
    },
    {
        path: '/404',
        name: '404',
        component: () => import('@/views/404.vue')
    },
    userPages
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
