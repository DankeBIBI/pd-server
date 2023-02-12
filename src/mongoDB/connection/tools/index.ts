import type { Context } from 'koa'
import { tools } from '../../../utils/tools'
export class TOOLS {
    /**
     * 加密
     */
    static encryption(src: Context) {
        const msg = src.request.url.split('/api/encryption?msg=')[1]
        src.body = tools.encryption(msg)
    }
    /**
     * 解密
     */
    static decrypt(src: Context) {
        const msg = src.request.url.split('/api/decrypt?msg=')[1]
        src.body = tools.decrypt(msg)
    }
}