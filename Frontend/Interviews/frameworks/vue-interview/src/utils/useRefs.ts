//CREATE AT: 2021-11-16

import {reactive, toRefs} from "vue";

function useFeature() {
    const state = reactive({
        x: 1,
        y: 2
    })
    return toRefs(state) //返回state对象中两个响应式数据
}

export default useFeature;
