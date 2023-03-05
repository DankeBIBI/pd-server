import { BLOG_M, BLOG_COLLECT_M, BLOG_LIKE_M, interfaces } from './model'
import { USER_M } from '../user/model'
import { Context } from 'vm'
import { request } from '../../../utils/interface'
BLOG_M.belongsTo(USER_M, {
    as: 'author',
    foreignKey: 'u_id',
    targetKey: 'u_id'
})
BLOG_COLLECT_M.belongsTo(USER_M, {
    as: 'author',
    foreignKey: 'u_id',
    targetKey: 'u_id'
})
BLOG_COLLECT_M.belongsTo(BLOG_M, {
    as: 'blog',
    foreignKey: 'b_id',
    targetKey: 'id'
})

BLOG_LIKE_M.belongsTo(USER_M, {
    as: 'author',
    foreignKey: 'u_id',
    targetKey: 'u_id'
})
BLOG_LIKE_M.belongsTo(BLOG_M, {
    as: 'blog',
    foreignKey: 'b_id',
    targetKey: 'id'
})
export class BLOG extends BLOG_M {
    /**
     * 创建文章
     * @param src 
     */
    static async createBlog(src: interfaces.Context | interfaces.request) {
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
    static async getUserBlog(src: interfaces.Context | interfaces.request) {
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
            const res: any = await BLOG.findAll({
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
            let list = res
            if (list.length > 0) {
                list.forEach((element: any, index: number) => {
                    if (element.pic && element.pic.length > 10) {
                        list[index].pic = JSON.parse(list[index].pic)
                    }
                });
            }
            src.success('查找成功', list)
        } catch (e) { console.error(e); }
    }
    /**
     * 设置浏览量与赞赞
     */
    static async setBlogStarAndViews(src: interfaces.Context | interfaces.request) {
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
    /**
     * 收藏文章
     */
    static async collectTheBlog(src: interfaces.Context | interfaces.request) {
        const { user_id, id, pic, title } = src.request.body
        try {
            if (await BLOG_COLLECT_M.findOne({ where: { u_id: user_id, b_id: id } })) {
                src.success('这篇图文已经收藏过了')
                return
            }
            const res: any = await BLOG_COLLECT_M.create({ u_id: user_id, b_id: id, pic, title })
            src.success('收藏成功！', res.create_time)
        } catch (e) { console.error(e); }
    }
    /**
     * 用户收藏的文章
     */
    static async userCollectedTheBlog(src: interfaces.Context | interfaces.request) {
        const { user_id } = src.request.body
        if (!user_id) {
            src.fail('用户ID不存在')
            return
        }
        try {
            const res = await BLOG_COLLECT_M.findAll({
                where: { u_id: user_id }, include: [
                    // {
                    //     model:USER_M,
                    //     as:'author'
                    // },
                    // {
                    //     model:BLOG_M,
                    //     as:'blog'
                    // }
                ]
            })
            src.success('', res)
        } catch (e) { console.error(e); }
    }
    /**
     * 文章详情
     */
    static async blogDetail(src: interfaces.Context | interfaces.request) {
        const { id, user_id } = src.request.body
        try {
            const res: any = await BLOG_M.findOne({
                where: { id: id },
                include: [
                    {
                        model: USER_M,
                        as: 'author'
                    }
                ]
            })
            if (res) {
                let src_ = JSON.parse(JSON.stringify(res))
                let list: any = {
                    is_star: 0,
                    is_like: 0,
                    ...src_
                }
                list.pic = JSON.parse(list.pic)
                if (await BLOG_COLLECT_M.findOne({ where: { u_id: user_id, b_id: id } }))
                    list.is_star = 1

                if (await BLOG_LIKE_M.findOne({
                    where: {
                        b_id: id
                    }
                }))
                    list.is_like = 1
                src.success('查找成功', list)
            }
            else
                src.fail('文章不存在或已删除')
        } catch (e) { console.error(e); }
    }
    /**
     * 用户文章点赞
     */
    static async userStarTheBlog(src: Context | request) {
        const { id, user_id } = src.request.body
        if (await BLOG_LIKE_M.findOne({
            where: {
                b_id: id
            }
        })) {
            src.fail('已经点赞过了')
            return
        }
        try {
            const res = await BLOG_LIKE_M.create({ u_id: user_id, b_id: id })
            src.success('点赞成功')
        } catch (e) { console.error(e); }
    }
    /**
     * 用户点赞过的文章
     */
    static async userStarList(src: Context | request) {
        const { user_id } = src.request.body
        try {
            const res = await BLOG_LIKE_M.findAll({
                where: {
                    u_id: user_id
                }
            })
            src.success('查找成功', res)
        } catch (e) { console.error(e); }

    }
}