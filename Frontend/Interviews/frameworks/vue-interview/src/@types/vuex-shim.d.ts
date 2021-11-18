//CREATE AT: 2021-11-13
import {ComponentCustomProperties} from 'vue'
import {Store} from 'vuex'

declare module '@vue/runtime-core' {
    // 声明自己的 store state
    interface State {
        count: number
    }

    interface ComponentCustomProperties {
        $store: Store<State>
    }
}
