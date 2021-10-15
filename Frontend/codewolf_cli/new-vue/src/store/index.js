import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 动态加载modules
const modules = {}
const files = require.context('./', true, /index\.js$/);
files.keys().filter(key => {
    return key !== './index.js';

}).map(key => {
    // 获取名字
    const modulePath = key.replace('./modules/', '');
    const moduleName = modulePath.replace('/index.js', '');
    const module = require(`${key}`);

    modules[`${moduleName}`] = module.default;
})

console.log(modules);

const store = new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    getters: {},
    modules: modules
})

export default store
