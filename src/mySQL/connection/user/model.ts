import { DataTypes, rules, Model } from '../../db'
// export const USER_M = sequelize.define("pd_user", {
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true
//     },
//     u_id: {
//         type: DataTypes.INTEGER,
//         unique: true
//     },
//     u_name: {
//         type: DataTypes.STRING
//     },
//     u_phone: {
//         type: DataTypes.INTEGER,
//     },
// }, { ...rules})
// export const USER_P_M = sequelize.define("pd_user_p", {
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true
//     },
//     u_id: {
//         type: DataTypes.INTEGER,
//         unique: true

//     },

//     u_password: DataTypes.STRING
// }, { timestamps: false  ,freezeTableName: true,})
export class USER_M extends Model {
    declare id: number           //
    declare u_id: number        //用户ID
    declare u_name: string       //用户名
    declare phone: string      //用户手机号
    declare head_url: string   //用户头像
    declare sex: number         //性别
    declare age: number         //年龄
    declare integral: number     //积分
}
USER_M.init({
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
    phone: {
        type: DataTypes.STRING
    },
    head_url: {

        type: DataTypes.STRING,
    },
    sex: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    age: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    },
    integral: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    lever:{
        type:DataTypes.INTEGER,
        defaultValue:0
    }

}, {
    modelName: 'pd_user', // 我们需要选择模型名称
    ...rules,
    // freezeTableName: true
})

export class USER_P_M extends Model {
    declare u_id: number          //用户ID
    declare u_password: string    //用户密码
}
USER_P_M.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    u_id: {
        type: DataTypes.INTEGER,
    },
    u_password: DataTypes.STRING
}, {
    modelName: 'pd_user_p', // 我们需要选择模型名称
    ...rules,
    timestamps: false,
    // freezeTableName: true
})
