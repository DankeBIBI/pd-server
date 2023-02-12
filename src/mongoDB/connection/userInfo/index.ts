import { user, user_p } from './userInfo_model'
import { tools } from '../../../utils/tools'
import type { Context, Next } from 'koa'
/**
 * 查找用戶
 * @param {*} rules 
 * @returns 
 */
interface _findUser {
    phone?: number,
    _id?: number | string
}
export const findUser = async (rules: _findUser) => {
    const find = await user.find(rules)
    if (find.length > 0)
        return true
    return false
}
/**
 * 查找密码
 * @param {*} rules 
 * @returns 
 */
// const findUser_p = async (rules) => {
//     const find = await user_p.find(rules)
//     if (find.length > 0)
//         return true
//     return false
// }
export class USER {
    /**
     * 新建用户信息
     * @param {*} src 
     * @param {*} next 
     */
    static async createUserInfo(src: Context, next: Next) {
        let data = src.request.body
        data.password = tools.encryption(data.password)
        try {
            if (await findUser({ phone: data.phone })) {
                src.success('用户已存在')
            } else {
                let user_id = Number(String(data.phone).substring(7, 11) + Math.floor(Math.random() * 9999))
                const res = await user.create({ ...data, _id: user_id })
                await user_p.create({ ...data, userInfo: res._id, id: user_id })
                src.success('创建成功', res)
            }
        } catch (error: any) {
            src.fail(error.message)
        }
    }
    /**
     * 登录
     * @param {*} src 
     * @param {*} next 
     */
    static async login(src: Context, next: Next) {
        let data:Context = src.request.body
        let phone = {
            phone: Number(data.user)
        }, user_id = {
            _id: Number(data.user)
        }
        // src.body = await user_p.findOne(phone).password
        // return
        try {
            if (data.user.length == 11)
                if (await findUser(phone)) {
                    const res = await user_p.findOne(phone).populate('userInfo'),
                        _password = res.password
                    if (data.password == tools.decrypt(_password)) {
                        src.success('登陆成功', res.userInfo)
                    } else {
                        src.success('密码错误')
                    }
                    return
                } else {
                    src.success('手机号未注册')
                    return
                }
            if (await findUser(user_id)) {
                const res = await user_p.findOne({userInfo:data.user}).populate('userInfo'),
                    _password = res.password
                if (data.password == tools.decrypt(_password)) {
                    src.success('登陆成功', res.userInfo)
                } else {
                    src.success('密码错误')
                }
            } else {
                src.success('用户ID不存在')
            }
        } catch (error: any) {
            src.fail(error.message)
        }
    }
    /**
     * 删除用户信息
     * @param {*} src 
     * @param {*} next 
     */
    static async deleteUserInfo(src: Context, next: Next) {
        try {
            const res = await user.deleteOne({ age: 1 })
            src.body = '删除成功'
        } catch (error) {
            src.body = '删除失败'
        }
    }
    /**
     * 更新用户信息
     * @param {*} src 
     * @param {*} next 
     */
    static async updateUserInfo(src: Context, next: Next) {
        const data = src.request.body
        let rules = {}
        if (data.name)
            rules = { name: data.name }
        if (data.head_url)
            rules = { head_url: data.head_url }
        if (data.sex)
            rules = { sex: data.sex }
        if (data.phone)
            rules = { phone: data.phone }
        try {
            const res = await user.findOne({ _id: Number(data.user_id) })
            res.set(rules)
            res.save()
            src.success('更新成功', res)
        } catch (error) {
            src.fail(error)
        }
    }
    /**
     * 获取用户信息
     * @param {*} src 
     * @param {*} next 
     */
    static async getUserInfo(src: Context, next: Next) {
        // let data = src.request.body
        try {
            const res = await user.find({})
            src.success('请求成功', res)
        } catch (error: any) {
            src.fail(error.message)
        }
    }

}
