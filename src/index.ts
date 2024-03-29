import koa from 'koa'
import _static from "koa-static"
import path from "path"
import cors from "koa-cors"//跨域
// parser = require("koa-bodyparser"),//post 请求解析
import koabody from "koa-body"
import { response, fail } from "./server/response"//设置请求返回的统一模板
import config from "./utils/config"
import { tools } from './utils/tools'
import { TIMER } from './server/timer'
import {distributionRouter} from './router/getRouter'
const router:any = distributionRouter(config.useDB)
const app = new koa()//创建
app.use(_static(path.join(__dirname, './static')))
// app.use(parser())
app.use(koabody({
    multipart: true,//设置支持文件
    formidable: {
        // uploadDir: path.join(__dirname, './static/upload'),//设置上传的目录
        keepExtensions: true//不改变文件扩展名
    }
}))
app.use(cors())
app.use(response()).use(fail())
app.use(router.routes())
router.allowedMethods({
    throw: true,
})
// TIMER(tools.startLog(`timer ... ${Date.now()}`))
TIMER(()=>{
    // tools.startLog(`timer ... ${Date.now()}`)
    // console.log(123)
})
const run = () => {
    try {
        app.listen(config.port, async () => {
            console.log(`服务启动！端口是${config.port}`)
        })
    } catch (e) {
        tools.startLog('失败')
    }
}
run()
