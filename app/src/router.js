import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.VUE_APP_MODE === 'production' ? '/' : '/final-project-atlanta-community/',
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