import * as http from "http";
import * as URL from "url";
import {queryObj, SU} from "../../@types/mytype";
import * as qs from "querystring"

function request(): void {
    const server: http.Server = http.createServer((request, response) => {
        const url: SU = request.url
        // console.log(url)
        const {pathname, query} = URL.parse(url!)
        // const queryObj = handleQueryString(query);
        const queryObj = qs.parse(query!)
        console.log(queryObj);
        /**
         * Url {
              protocol: null,
              slashes: null,
              auth: null,
              host: null,
              port: null,
              hostname: null,
              hash: null,
              search: '?name=zhangsan&age=19',
              query: 'name=zhangsan&age=19',
              pathname: '/login',
              path: '/login?name=zhangsan&age=19',
              href: '/login?name=zhangsan&age=19'
            }
         */
        switch (pathname) {
            case '/home':
                response.end("home")
                break
            case "/login":
                response.end("logged in")
                break
            default:
                response.end("error request!!")
        }
    })
    server.listen(13332, "localhost", () => {
        console.log("server started on port 13332")
    })
}

/**
 * 处理queryString
 * @param queryString
 */
function handleQueryString(queryString: string): queryObj {
    const query = queryString.split("&");
    let len = query.length
    const obj: queryObj = {}
    for (let i = 0; i < len; i++) {
        let split = query[i].split("=");
        obj[split[0]] = split[1];
    }
    return obj
}

request()
