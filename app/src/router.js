import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'project',
            component: () => import('./views/Project.vue')
        },

        {
            path: '/viz',
            name: 'viz',
            component: () => import('./views/Viz.vue')
        },

    ]
})