import config from '../utils/config'
import { tools } from '../utils/tools'
import  * as interfaces from '../utils/interface'
import { Model, DataTypes } from 'sequelize'
const Sequelize = require('sequelize')
const MYSQL = config.mySQL
const BASE = MYSQL.BASE
const sequelize = new Sequelize(MYSQL.DATABASE, tools.decrypt(MYSQL.USERNAME[BASE]), tools.decrypt(MYSQL.PASSWORD[BASE]), {
    host: MYSQL.HOST[BASE],
    dialect: 'mysql'/* 选择 'mysql' | 'mariadb' | 'postgres' | 'mssql' 其一 */,
    define: {
        freezeTableName: true,
        createdAt: 'create_time',
        updatedAt: 'update_time',
    },
    timezone: '+08:00',
    logging: true,//打印日志

});
sequelize.sync()
const rules = {
    sequelize,
}
const runSequelize = async () => {
    try {
        await sequelize.authenticate();
        console.log('链接成功',MYSQL.HOST[BASE]);
    } catch (error) {
        console.error('连接失败', error);
    }
}
runSequelize()
export {
    DataTypes,
    Model,
    tools,
    config,
    rules,
    interfaces,
    sequelize
}
