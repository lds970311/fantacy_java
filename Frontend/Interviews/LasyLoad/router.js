const express = require("express")

const app = express()

//静态资源托管
app.use('/static', express.static)