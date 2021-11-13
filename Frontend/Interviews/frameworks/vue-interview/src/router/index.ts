//CREATE AT: 2021-11-12
import {createRouter, createWebHashHistory} from "vue-router";
import TemplateUse from "../components/TemplateUse.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            redirect: "/templateUse"
        },
        {
            path: "/templateUse",
            component: TemplateUse,
        }
    ]
})

export default router
