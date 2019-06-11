const express = require("express")
const logger = require("morgan")
const bodyParser = require("body-parser")
const favicon = require("serve-favicon")
const session = require("express-session")
const cookie = require("cookie-parser")
const indexRouter = require("./router/indexRouter")

//创建服务器
const app = express()

//打印日志 可以将请求信息打印在控制台，便于开发调试
app.use(logger("dev"))
//使用cookie模块
app.use(cookie())
//配置session模块
app.use(session({
    name:"hq",
    secret:"11",
    resave:true,              //每次触发后保存时间
    rolling:true,               // 最后一次触发后计时
    cookie:{maxAge:3600000},   //过期时间 毫秒为单位

    saveUninitialized:true
}))
//解析post方法 配置 post的body模块
app.use(bodyParser.urlencoded({extended:false}))
//将数据转化成json
app.use(bodyParser.json())


// 配置ejs视图引擎
app.set("views",__dirname+"/src")
// jade pug ejs
app.set("view engine","ejs")


//配置网页标题旁的小icon
app.use(favicon(__dirname+"/src/images/logo.png"))
//配置静态资源
app.use(express.static(__dirname+"/src"))
//状态404报错，跳转到404页面
/*app.use(function (req,resp) {
    resp.status(404);
    resp.redirect("/pages/404.html");
})*/



//使用路由，通过路由阻塞信息   下一步到路由文件
app.use(indexRouter)

app.listen(8085,()=>{
    console.log("服务器监听。。。")
})