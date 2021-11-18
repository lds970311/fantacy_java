//CREATE AT: 2021-11-18
import useMapper from './useMapper'
import {createNamespacedHelpers, mapActions} from 'vuex'

export default function useActions(module: string | string[], mapper?: string[]) {
    let mapperFn = mapActions
    if (Array.isArray(module) && !mapper) {
        return useMapper(module, mapperFn)
    }
    if (!Array.isArray(module) && mapper) {
        mapperFn = createNamespacedHelpers(module).mapActions
        return useMapper(mapper, mapperFn)
    }
    if (!(Array.isArray(module) && !mapper) || !Array.isArray(module) && mapper) {
        console.error("params error!")
    }
}
