import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    // mode: 'history',
    // mode: 'hash',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            component: () =>
                import ('@/views/Index')
        },
        {
            path: '/moving_01/:index',
            component: () =>
                import ('@/components/MovingServices'),
            props: true
        },
        {
            path: '/moving_02',
            component: () =>
                import ('@/components/MovingServe_02')
        },
        {
            path: '/CleaningService',
            component: () =>
                import ('@/components/CleaningService')
        },
        {
            path: '/kuandai',
            component: () =>
                import ('@/components/Kuandai')
        },
        {
            path: '/YuYueMoving',
            component: () =>
                import ('@/components/YuYueMoving')
        },
        {
            path: '/YuYueBaoJie',
            component: () =>
                import ('@/components/YuYueBaoJie')
        }
    ]
})