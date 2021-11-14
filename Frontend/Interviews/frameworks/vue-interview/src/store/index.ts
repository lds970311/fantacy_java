//CREATE AT: 2021-11-13
import {createStore} from 'vuex'
import mainOptions from "./modules/mainOptions";


const store = createStore({
    strict: true,
    modules: {
        mainOptions
    }
})

export default store
