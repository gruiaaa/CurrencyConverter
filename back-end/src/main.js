

const { APP_PORT }  = require("./config/config.default")



const app = require("./app")


//监听端口
app.listen(APP_PORT,() =>{
     console.log(`server in running on http://127.0.0.1:${APP_PORT}`)
})