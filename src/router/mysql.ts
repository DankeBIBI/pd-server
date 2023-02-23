import route from 'koa-router'
import type { Context } from 'koa'
const router = new route({
    prefix: '/api',//在全部请求路径前添加/api（前缀）
})

import { USER } from '../mySQL/connection/user'
import { TOOLS } from '../mySQL/connection/tools'
import { BLOG } from '../mySQL/connection/blog'
router.get('/getUserInfo', USER.getUserInfo)
    .post('/createUserInfo', USER.createUser)
    .post('/updateUserInfo', USER.updateUserInfo)
    .post('/deleteUserInfo', USER.deleteUserInfo)
    .post('/login', USER.login)
    //文件传输模块---------------------------------------------
    .post('/upload', TOOLS.upload)
    .get('/encryption', TOOLS.encryption)
    .get('/decrypt', TOOLS.decrypt)
    //文章模块------------------------------------------------
    .post('/createBlog', BLOG.createBlog)
    .get('/userBlog', BLOG.getUserBlog)

    //状态模块------------------------------------------------
    // .get('/startLog', SERVER_LOG.startLog)
    // .get('/bb', BLOG.trys)
    .get('/', async (src: Context) => {
        src.body = 'DANKEBIBI'
    })
export default router