import { sequelize } from '../db'
import { Model, DataTypes } from 'sequelize'
class USER extends Model {
    declare u_id: number
}
USER.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    u_id: {
        type: DataTypes.INTEGER,
        unique: true
    },
    u_name: {
        type: DataTypes.STRING
    },
    u_phone: {
        type: DataTypes.INTEGER
    },
}, {
    sequelize, // 我们需要传递连接实例
    modelName: 'pd_user', // 我们需要选择模型名称
    createdAt: 'create_time',
    updatedAt: 'update_time'
})
const run = async () => {
    try {

        const res = await USER.findOne({ where: { id: 1 } });
        console.log("🚀这是打印的数据哦 ~ res:", res);
    } catch (e) { console.error(e); }
}
run()

const User = sequelize.define("pd_user", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    u_id: {
        type: DataTypes.INTEGER,
        unique: true
    },
    u_name: {
        type: DataTypes.STRING
    },
    u_phone: {
        type: DataTypes.INTEGER,
    },
}, {
    createdAt: 'create_time',
    updatedAt: 'update_time'
})
export const run_ = async () => {
    try {
        await User.sync()
        // const res = await pd_user.findAll({})
        // console.log("🚀这是打印的数据哦 ~ res:", res)
        return await User.findOne({ where: { id: 2 } });
    } catch (e) { console.error(e); }
}
// runSequelize()