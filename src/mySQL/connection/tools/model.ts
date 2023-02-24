import {Model,DataTypes,rules,}  from '../../db'
export class UPLOAD_LOG_M extends Model{
    declare id: number           //
    declare u_id: number        //用户ID
    declare size:string         //文件大小
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
    size:DataTypes.STRING
},{...rules,modelName:'pd_upload'})