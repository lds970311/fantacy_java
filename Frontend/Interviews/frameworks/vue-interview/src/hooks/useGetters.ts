//CREATE AT: 2021-11-18
// 在setup中使用mapGetters的hooks
import {createNamespacedHelpers, mapGetters} from 'vuex'
import useMapper from './useMapper'

export default function useGetters(moduleName: string, mapper: string[] | string) {
    let mapperFn = mapGetters
    if (moduleName.length > 0) {
        mapperFn = createNamespacedHelpers(moduleName).mapGetters
    } else {
        mapper = moduleName
    }
    return useMapper(<string[]>mapper, mapperFn)
}
