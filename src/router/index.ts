import type { Context } from 'koa'
import route from 'koa-router'
const router = new route({
    prefix: '/api',//在全部请求路径前添加/api（前缀）
})
//
import { USER } from '../mongoDB/connection/userInfo'
import { UPLOAD } from '../mongoDB/connection/file'
import { TOOLS } from '../mongoDB/connection/tools'
import { BLOG } from '../mongoDB/connection/blog'

//用户信息模块---------------------------------------------
router.get('/getUserInfo', USER.getUserInfo)
    .post('/createUserInfo', USER.createUserInfo)
    .post('/update', USER.updateUserInfo)
    .post('/delete', USER.deleteUserInfo)
    .post('/login', USER.login)
    .post('/updateUserInfo', USER.updateUserInfo)
    //文件传输模块---------------------------------------------
    .post('/upload', UPLOAD.upload)
    .get('/encryption', TOOLS.encryption)
    .get('/decrypt', TOOLS.decrypt)
    //文章模块------------------------------------------------
    .post('/createBlog', BLOG.createBlog)
    .post('/userBlog', BLOG.userBlog)
    .get('/', async (src: Context) => {
        src.body = 'DANKEBIBI'
    })
export default router