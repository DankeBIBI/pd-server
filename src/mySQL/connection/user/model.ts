import { sequelize } from '../../db'
import { Model,DataTypes } from 'sequelize'
// base.sync()？同步表
class USER extends Model{
    declare u_id:number
}
USER.init({
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true
    },
    u_id:{
        type:DataTypes.INTEGER,
        unique:true
    },
    u_name:{
        type:DataTypes.STRING
    },
    u_phone:{
        type:DataTypes.INTEGER
    },
    create_time:{
        type:DataTypes.STRING
    }
},{sequelize})
const res = USER.findOne({where:{id :1}})
console.log("🚀这是打印的数据哦 ~ res:", res)
