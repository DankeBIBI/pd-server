import { blog } from './blog_model'
import { Context, Next, request } from '../../../utils/interface'
export class BLOG {
    static async createBlog(src: Context | request, next: Next) {
        try {
            const res = await blog.create({ ...src.request.body })
            src.success('创建成功',res)
        } catch (error:any) {
            src.fail(error.message)
        }

    }
    static async userBlog(src: Context | request) {
        let data = src.request.body
        let select = {
            path: 'author',
            select: ['name','phone']
            
        }
        // const res = await blog.find({ _id:"63db7361ed9fce26540cb37d" })
        const res = await blog.find(data).populate(select)
        src.success('查找成功', res)
    }
}