//CREATE AT: 2021-11-12
import {createRouter, createWebHistory} from "vue-router";
import TemplateUse from "../components/TemplateUse.vue";
import VuexTest from "../components/VuexTest.vue";
import VModel from "../pages/VModel.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            redirect: "/templateUse"
        },
        {
            path: "/templateUse",
            component: TemplateUse,
        },
        {
            path: "/vuexTest",
            component: VuexTest
        },
        {
            path: "/vmodel",
            component: VModel
        }
    ]
})

export default router
