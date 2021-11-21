//CREATE AT: 2021-11-21
import moment from "moment"

//Format Dates
// moment.locale('zh-cn')
import "moment/locale/zh-cn" //手动引入中文语言包
const no2 = moment().format('MMMM Do YYYY, h:mm:ss a');

document.getElementById("date")!.innerHTML = no2;
