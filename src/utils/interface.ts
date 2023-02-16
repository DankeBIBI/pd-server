import type { Context, Next } from 'koa'
interface request {
    request: any,
    fail: Function,
    success: Function
}
interface file {
    size: string |any,
    path: string,
    name: string,
    type: string,
    mtime: string
}
export {
    request,
    Context,
    Next,
    file
}