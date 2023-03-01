import { DataTypes, rules, Model, interfaces } from '../../db'
export const TYPES = interfaces
export class BLOG_M extends Model {
    declare id: number           //
    declare u_id: number        //用户ID
    declare title: string         //标题
    declare content: string         //内容
    declare pic: Array<string>       //图片组，
    declare views: number            //浏览量
    declare star: number             //赞
}
BLOG_M.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    u_id: {
        type: DataTypes.INTEGER,
        unique: true
    },
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    pic: DataTypes.TEXT,
    views: DataTypes.INTEGER,
    star: DataTypes.INTEGER,
}, { modelName: 'pd_blog', ...rules })
export class BLOG_COLLECT_M extends Model{
    declare id: number           //
    declare u_id: number        //用户ID
    declare b_id: number        //文章ID
    declare title: string         //标题
    declare pic: string       //图片组
}
BLOG_COLLECT_M.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    u_id: {
        type: DataTypes.INTEGER,
    },
    b_id: {
        type: DataTypes.INTEGER,
        unique: true
    },
    pic:DataTypes.STRING,
    title:DataTypes.STRING,
},{...rules,modelName:'pd_blog_collect'})
