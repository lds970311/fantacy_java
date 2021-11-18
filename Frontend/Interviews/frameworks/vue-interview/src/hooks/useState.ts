//CREATE AT: 2021-11-18
// 在setup中使用mapState的hooks
import {createNamespacedHelpers, mapState} from 'vuex'
import useMapper from './useMapper'

// 传入一个模块名
export default function useState(moduleName: string, mapper: string[] | string) {
    let mapperFn = mapState
    // 判断传入的模块名是否是String类型，且长度不为0
    if (moduleName.length > 0) {
        mapperFn = createNamespacedHelpers(moduleName).mapState
    } else {
        mapper = moduleName
    }
    return useMapper(<string[]>mapper, mapperFn)
}
