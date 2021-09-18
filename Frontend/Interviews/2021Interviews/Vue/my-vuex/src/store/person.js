import {nanoid} from 'nanoid'

const personOptions = {
    namespaced: true,
    state: {
        personList: [
            {id: '001', name: 'lee'}
        ],
    },
    actions: {
        async addFromBack(context) {
            let res = await fetch("http://iwenwiki.com/api/newworld/strategy.php")
            let data = await res.json()
            let dataList = [];
            console.log(data)
            Object.keys(data).forEach(item => {
                if (data[item]['main_title']) {
                    dataList.push(data[item]['main_title']);
                }
            })
            context.commit('addData', dataList)
        }
    },
    mutations: {
        addPerson(state, val) {
            state.personList.push({
                id: nanoid(51),
                name: val
            })
        },
        addData(state, val) {
            val.forEach(item => {
                state.personList.push({
                    id: nanoid(),
                    name: item
                })
            })
        }
    },
    getters: {
        firstName(state) {
            return state.personList[0].name
        }
    }
}

export default personOptions