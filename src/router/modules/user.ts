export const userPages = {
    path: '/user',
    name: 'User',
    redirect: '/user/profile',
    component: () => import('@/views/user/profile.vue'),
    meta: { title: '用户管理', icon: '' },
    children: [
        {
            path: 'profile',
            name: 'Profile',
            component: () => import('@/views/user/Profile.vue'),
            meta: { title: '用户信息', icon: '' }
        }
    ]
}
