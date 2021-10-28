import express from "express";
import axios from "axios";

const asyncServer = () => {
    const app = express()

    app.use((async (req, res, next) => {
        // @ts-ignore
        req.message = "aaa"
        next()
        // @ts-ignore
        console.log(req.message)
        let result = await getData()
        console.log(result?.data)
        // @ts-ignore
        res.send(result?.data)
    }))

    app.use(((req, res, next) => {
        // @ts-ignore
        req.message += "bbb"
        next()
    }))

    app.use(((req, res, next) => {

        // @ts-ignore
        req.message += "ccc"
    }))
    app.listen(10086, "localhost", function () {
        console.log("express server listen on 10086")
    })
}

const getData = async () => {
    try {
        return await axios.get("http://123.207.32.32:9001/top/artists", {
            params: {
                offset: 0,
                limit: 10
            }
        });
    } catch (e) {
        console.log(e);
    }
}

asyncServer()
