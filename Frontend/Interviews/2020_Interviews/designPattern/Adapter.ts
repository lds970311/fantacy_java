/**
 * 适配器模式
 */

//已有地图的接口
const googleMap = {
    show() {
        console.log("rendering google map...");
    }
}

const baiduMap = {
    display() {
        console.log("rendering baiduMap...")
    }
}

//已有的渲染接口
const renderMap = function (map: any) {
    if (map.show instanceof Function) {
        map.show()
    }
}

//定义百度地图的适配器, 适配renderMap的show方法
const baiduMapAdapter = {
    show() {
        return baiduMap.display()
    }
}

//测试
renderMap(googleMap) //rendering google map...
renderMap(baiduMapAdapter) //rendering baiduMap...
