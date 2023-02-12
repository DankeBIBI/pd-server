import type {Context,Next}  from 'koa'
interface data{}
export const response = () => {
    return async (src:Context, next:Next) => {
        src.success = (message:string, data:data) => {
            src.response.status = 200//设置成功的状态
            src.body = {
                code: 1,
                message,
                data
            }
        }
        src.fail = (message:string, code:number) => {
            src.response.status = code ? code : 501 //请求是失败是指定一个状态码
            src.body = {
                code: 0,
                message
            }
        }
        await next();
    }
}
export const fail = () =>{
    return async (response:Context, next:Next) => {
        try {
            if (!response.body) {
                response.body = {
                    code: 404,
                    message: 'by DANKEBIBI @ node-api-server 服务'
                }
                // response.redirect('/test.txt')
            }
            await next()//处理后续代码
        } catch (error) {
            response.body = {
                code: 504,
                message: '请求出错'
            }
            response.status = 504
        }
    }
}