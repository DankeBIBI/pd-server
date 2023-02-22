import config from '../utils/config'
import { tools } from '../utils/tools'
import { Model, DataTypes } from 'sequelize'
const Sequelize = require('sequelize')
const mySQL = config.mySQL
const user = mySQL.user
const sequelize = new Sequelize('pd-base', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'/* 选择 'mysql' | 'mariadb' | 'postgres' | 'mssql' 其一 */,
    define: {
        freezeTableName: true,
        createdAt: 'create_time',
        updatedAt: 'update_time',
    }
});
const rules = {


}
const runSequelize = async () => {
    try {
        await sequelize.authenticate();
        console.log('链接成功');
    } catch (error) {
        console.error('连接失败', error);
    }
}
runSequelize()
export {
    sequelize,
    DataTypes,
    Model,
    tools,
    config,
    rules,

}
