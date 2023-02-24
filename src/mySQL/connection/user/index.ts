import { USER_M, USER_P_M } from './model'
import { Context, request, Next } from '../../../utils/interface'
/**
 * 查找用戶
 * @param {*} rules 
 * @returns 
 */
interface _findUser {
    phone?: number,
    u_id?: number | string
}
// USER_M.hasMany(USER_P_M, {
//     foreignKey: 'u_id',
// })
// USER_M.sync()
USER_P_M.belongsTo(USER_M, {
    as: 'userInfo',//起一个别名
    foreignKey: 'u_id',
    targetKey: 'u_id'
})
export const findUser = async (rules: _findUser) => {
    const find: any = await USER_M.findOne({ where: { ...rules } })
    if (find)
        return true
    return false
}
export class USER extends USER_M {
    static async getUserInfo(src: Context | request) {
        const res = await USER.findAll()
        src.success('查询成功', res)
    }
    /**
     * 登录
     * @param src 
     */
    static async login(src: Context | request) {
        const data: Context = src.request.body
        const u_phone = {
            phone: Number(data.user)
        }
        const u_id = {
            u_id: Number(data.user)
        }
        try {
            const res = data.user.length == 11 ? await USER_M.findOne({
                where: { ...u_phone },
                attributes: {
                    exclude: ['id']
                }
            }) : await USER_M.findOne({
                where: { ...u_id },
                attributes: {
                    exclude: ['id']
                }
            })
            if (res) {
                const res_p: any = await USER_P_M.findAll({
                    where: {
                        u_id: res.u_id,
                    },
                    // include: [
                    //     {
                    //         model: USER_M,
                    //         as: 'userInfo',
                    //     }
                    // ],
                    // attributes: []
                })
                if (res_p[0].u_password === data.password)
                    src.success('登录成功', res)
                else
                    src.success('密码错误')
            } else {
                src.success(`${data.user.length == 11 ? '手机号未注册' : '用户ID不存在'}`)
            }
        } catch (error: any) {
            src.fail(error.message)
        }

    }
    /**
     * 创建用户
     * @param src 
     */
    static async createUser(src: Context | request) {
        const { name, phone, password } = src.request.body
        try {
            if (await findUser({ phone: phone })) {
                src.success('用户已注册')
            }
            else {
                let u_id = Number(String(phone).substring(7, 11) + Math.floor(Math.random() * 9999))
                let params = {
                    u_id: u_id,
                    u_name: name,
                    phone: phone
                }
                let params_p = {
                    u_id: u_id,
                    u_password: password
                }
                const res = await USER_M.create(params)
                await USER_P_M.create(params_p)
                src.success('注册成功', res)
            }
        } catch (e) { console.error(e); }

    }
    static async updateUserInfo(src: Context | request) {
        const { name, head_url, sex, phone, user_id } = src.request.body
        let rules
        if (name)
            rules = { u_name: name }
        if (head_url)
            rules = { head_url: head_url }
        if (sex)
            rules = { sex: sex }
        if (phone)
            rules = { phone: phone }
        try {
            const res = await USER_M.update({ ...rules }, { where: { u_id: user_id } })
            src.success('更新成功', await USER.findOne({
                where: { u_id: user_id },
                // attributes:[]
            }))
        } catch (e) { console.error(e); }
    }
    static async deleteUserInfo(src: Context | request) {
        const { user_id } = src.request.body
        try {
            const res = await USER.destroy({ where: { u_id: user_id } })
            src.success('用户注销成功', `再见、${user_id}`)
        } catch (e) { console.error(e); }
    }
}