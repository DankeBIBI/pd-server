import { server_log } from './server_log_model'
import { Context, Next, request } from '../../../utils/interface'
export class SERVER_LOG extends server_log {
    static async startLog(src: Context | request, next: Next) {
        // let data = src.request.body
        src.success(src.request)
    }
}