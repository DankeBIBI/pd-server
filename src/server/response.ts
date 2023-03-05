import { Context, Next, request } from '../utils/interface'
import { KEY } from '../mySQL/utils/key'
const CHECKKEY = async (u_key: string, src: Context | request) => {
    const res:any = await KEY.findOne({where:{u_key:u_key}})
    if (res) {
        return true
    } else {
        src.response.status = 996
        src.body = {
            code: 0,
            tip: '应用未绑定'
        }
        return false
    }
}
export const response = () => {
    return async (src: Context | request, next: Next) => {
        const {pd_key} = src.request.header
        if (! await CHECKKEY(pd_key, src))
            return
        src.success = (tip: string, data: any) => {
            src.response.status = 200//设置成功的状态
            src.body = {
                code: 1,
                tip,
                data
            }
        }
        src.fail = (tip: string, code: number) => {
            src.response.status = code ? code : 501 //请求是失败是指定一个状态码
            src.body = {
                code: 0,
                tip
            }
        }
        await next();
    }
}
export const fail = () => {
    return async (response: Context, next: Next) => {
        try {
            if (!response.body) {
                response.body = {
                    code: 404,
                    tip: 'by DANKEBIBI @ node-api-server 服务'
                }
                // response.redirect('/test.txt')
            }
            await next()//处理后续代码
        } catch (error) {
            response.body = {
                code: 504,
                tip: '请求出错'
            }
            response.status = 504
        }
    }
}