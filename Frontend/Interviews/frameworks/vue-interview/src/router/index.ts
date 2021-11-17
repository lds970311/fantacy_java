//CREATE AT: 2021-11-12
import {createRouter, createWebHistory} from "vue-router";
import TemplateUse from "../components/TemplateUse.vue";
import VuexTest from "../components/VuexTest.vue";
import VModel from "../pages/VModel.vue"
import ToRefs from "../pages/ToRefs.vue";

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
        },
        {
            path: '/torefs',
            component: ToRefs,
            meta: {
                title: "toRefs"
            }
        }
    ]
})

export default router
