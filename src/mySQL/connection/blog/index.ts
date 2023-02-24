import { BLOG_M } from './model'
import { USER_M } from '../user/model'
import { Context, request } from '../../../utils/interface'
BLOG_M.belongsTo(USER_M, {
    as: 'author',
    foreignKey: 'u_id',
    targetKey: 'u_id'
})
export class BLOG extends BLOG_M {
    /**
     * 创建文章
     * @param src 
     */
    static async createBlog(src: Context | request) {
        const { author, title, content, image } = src.request.body
        try {
            const res = await BLOG.create({ u_id: author, title, content, pic: JSON.stringify(image) })
            src.success('创建成功', res)
        } catch (e) { console.error(e); }
    }
    /**
     * 获取文章
     * @param src 
     */
    static async getUserBlog(src: Context | request) {
        const { author } = src.request.body
        let rules = {}
        if (author) {
            rules = {
                where: { u_id: author ? author : '' },
            }
        }
        //   src.success(src.request.body)
        //   return
        try {
            const res: any = await BLOG.findAndCountAll({
                ...rules,
                attributes: {
                    exclude: ['u_id']
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
                res.rows.forEach((element: any, index: number) => {
                    if (element.pic && element.pic.length > 10) {
                        res.rows[index].pic = JSON.parse(res.rows[index].pic)
                    }
                });
            }
            src.success('查找成功', res)
        } catch (e) { console.error(e); }
    }
    static async setBlogStarAndViews(src: Context | request) {
        const { id, views, star } = src.request.body
        const res: any = await BLOG_M.findOne({ where: { id: Number(id) } })
        if (views)
            await res.set({
                views: res.views + Number(views)
            })
        if (star)
            await res.set({
                star: res.star + Number(star)
            })
        await res.save()
        src.success(`${views ? `浏览量+1` : '点赞成功'}`, res)

    }
}