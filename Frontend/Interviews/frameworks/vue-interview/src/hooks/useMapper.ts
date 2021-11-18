//CREATE AT: 2021-11-18
// useMapper.js 核心
import {computed} from 'vue';
import {Computed, Mapper, useStore} from 'vuex'

export default function useMapper(mapper: string[], mapFn: Mapper<Computed>) {
    const store = useStore()
    const storeDataFuncs = mapFn(mapper)
    const storeData = {}
    Object.keys(storeDataFuncs).forEach(key => {
        const fn = storeDataFuncs[key].bind({$store: store})
        // @ts-ignore
        storeData[key] = computed(fn)
    })
    return storeData
}
