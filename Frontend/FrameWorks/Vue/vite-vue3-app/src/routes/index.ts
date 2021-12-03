//CREATE AT: 2021-12-03
import {createRouter, createWebHistory} from "vue-router"
import {defineAsyncComponent} from 'vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: defineAsyncComponent(() => import("../pages/Home/Home.vue")),
            meta: {
                title: 'Home'
            }
        }
    ]
})

export default router
