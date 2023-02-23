import { BLOG_M } from './model'
import { USER_M } from '../user/model'
import { Context, request } from '../../../utils/interface'
BLOG_M.belongsTo(USER_M, {
    as: 'author',
    foreignKey: 'u_id',
    targetKey: 'u_id'
})
BLOG_M.sync()
export class BLOG extends BLOG_M {
    static async createBlog(src: Context | request) {
        const { author, title, content, image } = src.request.body
        try {
            const res = await BLOG.create({ u_id: author, title, content, pic: JSON.stringify(image) })
            src.success('创建成功', res)
        } catch (e) { console.error(e); }
    }
    static async getUserBlog(src: Context | request) {
        const { author } = src.request.body
        let rules = {}
        if (author) {
            rules = {
                where: { u_id: author ? author : '' },
            }
        }

        try {
            const res: any = await BLOG.findAndCountAll({
                ...rules,
                attributes: {
                    exclude: ['id', 'u_id']
                },
                include: [
                    {
                        model: USER_M,
                        as: 'author',
                        attributes: ['u_id', 'u_name', 'head_url']
                    }
                ]
            })
            if (res.count > 0) {
                res.rows.forEach((element:any,index:number) => {
                    if(element.pic && element.pic.length>10){
                        res.rows[index].pic = JSON.parse(res.rows[index].pic)
                    }
                });
            }
            src.success('查找成功', res)
        } catch (e) { console.error(e); }
    }
}