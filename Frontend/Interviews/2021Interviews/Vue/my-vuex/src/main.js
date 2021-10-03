import Vue from 'vue'
import App from './App'
import router from './router/router'
import store from './store/store'
import MyPlugin from "../plugins/MyPlugin";

Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.use(MyPlugin)

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
