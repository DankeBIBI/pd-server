import { server_log } from './server_log_model'
import { Context, Next, request } from '../../../utils/interface'
export class SERVER_LOG extends server_log {
    static async startLog(src: Context | request, next: Next) {
        const msg = src.request.url.split('/api/startLog?msg=')[1]
        server_log.create({state:decodeURIComponent(msg)})
    }
}