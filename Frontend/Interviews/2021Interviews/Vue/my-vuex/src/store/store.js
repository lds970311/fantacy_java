import Vuex from 'vuex'
import Vue from 'vue'
import countOptions from "@/store/count";
import personOptions from "@/store/person";

Vue.use(Vuex)


const store = new Vuex.Store({
    strict: true,
    modules: {
        countOptions: countOptions,
        personOptions: personOptions
    }
})


export default store;
