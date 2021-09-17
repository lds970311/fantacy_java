import Vue from 'vue'
import App from './App'
import router from './router/router'
import store from './store/store'

Vue.config.productionTip = false
Vue.prototype.$store = store

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
