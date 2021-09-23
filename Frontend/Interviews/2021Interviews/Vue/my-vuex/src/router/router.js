import VueRouter from "vue-router";
import Router from "vue-router";
import Vue from "vue";
import App from "../App";
import Count from "@/components/Count";

Vue.use(Router)
const router = new VueRouter({
    routes: [
        {
            name: 'app',
            path: '/',
            component: App,
            children: [
                {
                    path: '/count',
                    component: Count
                }
            ]
        }
    ],
    mode: 'history'
})

export default router