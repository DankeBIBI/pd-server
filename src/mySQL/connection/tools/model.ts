import { Model, DataTypes, rules, } from '../../db'
export class UPLOAD_LOG_M extends Model {
    declare id: number           //
    declare u_id: number        //用户ID
    declare size: string         //文件大小
}
UPLOAD_LOG_M.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    u_id: {
        type: DataTypes.INTEGER,
        unique: true
    },
    size: DataTypes.STRING
}, { ...rules, modelName: 'pd_upload' })
export class PROJECT_SETTING_M extends Model {
    declare id: number           //
    declare project_name: string // 项目名称
    declare index_ad: string //首页广告
    declare index_tip: string // 首页提示语
}
PROJECT_SETTING_M.init({
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true
    },
    project_name:DataTypes.STRING,
    index_ad:DataTypes.STRING,
    index_tip:DataTypes.STRING
},{...rules,modelName:'pd_project_setting'})