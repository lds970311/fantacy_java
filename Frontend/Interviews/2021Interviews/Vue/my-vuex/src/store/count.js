const countOptions = {
    namespaced: true,
    state: {
        num: 0,
    },
    actions: {
        addIfOdd: function (context, value) {
            if (context.state.num % 2 !== 0) {
                context.commit('add', value)
            }
            console.log("add if odd is called")
        },
        addAsync: function (context, value) {
            setTimeout(() => {
                context.commit('add', value)
            }, 500)
            console.log("async add")
        }
    },
    mutations: {
        add: function (state, val) {
            state.num += Number(val);
            console.log("add is called")
        },
        sub: function (state, val) {
            state.num -= Number(val);
            console.log("sub is called")
        },
    },
    getters: {
        bigSum(state) {
            return state.num * 10;
        }
    }
}

export default countOptions