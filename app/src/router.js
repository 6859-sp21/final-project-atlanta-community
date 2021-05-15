import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    // https://stackoverflow.com/questions/48521177/404-when-reloading-a-vue-website-published-to-github-pages
    mode : 'hash',
    base: '/final-project-atlanta-community/',
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

// Reference: https://github.com/guizoxxv/vue-cli-deploy