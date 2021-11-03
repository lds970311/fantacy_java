import "../../assets/style/common.less"
import {createCache} from "./closureCache";

//动态创建标签
import "../plugins/menuCreator"

//缓存测试
const cache = createCache();

cache.set("name", "Tom")
console.log(cache.get("name"))
