import config from '../utils/config'
import { tools } from '../utils/tools'
const Sequelize = require('sequelize')
const mySQL = config.mySQL
const user = mySQL.user
export const sequelize = new Sequelize('pd-base', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'/* 选择 'mysql' | 'mariadb' | 'postgres' | 'mssql' 其一 */,
    define: {
        freezeTableName: true,//表名与类名同步
    },

});
// export const runSequelize = async () => {
//     try {
//         await sequelize.authenticate();
//         console.log('链接成功');
//     } catch (error) {
//         console.error('连接失败', error);
//     }
// }
import { Model, DataTypes } from 'sequelize'
// base.sync()？同步表

const User = sequelize.define("pd_users", {
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
    create_time: DataTypes.TIME,
    update_time: DataTypes.TIME
}, {
    createdAt: 'create_time',
    updatedAt: 'update_time'
})
export const run = async () => {
    try {
       await User.sync()
        // const res = await pd_user.findAll({})
        // console.log("🚀这是打印的数据哦 ~ res:", res)
        return await User.findOne({ where: { id: 1 } });
    } catch (e) { console.error(e); }
}
// runSequelize()
