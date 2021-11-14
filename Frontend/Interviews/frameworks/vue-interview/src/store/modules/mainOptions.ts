//CREATE AT: 2021-11-13
import {ActionContext, Module} from "vuex";

interface IMain {
    count: number
}

const mainOptions: Module<IMain, any> = {
    namespaced: true,
    state: {
        count: 1
    },
    actions: {
        increment(context: ActionContext<IMain, any>) {
            console.log("123")
            context.commit("increment")
        },
        jian(context: ActionContext<IMain, any>) {
            context.commit("decrement")
        }
    },
    mutations: {
        increment(state: IMain) {
            state.count += 1
        },
        decrement(state: IMain) {
            state.count--;
        }
    },
    getters: {
        num: (state: IMain) => state.count
    }
}

export default mainOptions
