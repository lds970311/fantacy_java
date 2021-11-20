import "../../assets/style/common.less"
import {createCache} from "./closureCache";
import InsertImage from "../plugins/InsertImage"
//动态创建标签
import "../plugins/menuCreator"

//导入图片
import img1 from "../../public/images/01.jpeg"

//缓存测试
const cache = createCache();

cache.set("name", "Tom")
console.log(cache.get("name"))

//加载图片设置
InsertImage(img1, document.body, 200, 200)
