import type { Context, Next } from 'koa'
interface request {
    request: any,
    fail: Function,
    success: Function
}
export {
    request,
    Context,
    Next
}