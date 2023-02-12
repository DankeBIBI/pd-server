const mongo = require('../../db')
const {tools} = require('../../../utils/tools')
const USERINFO = new mongo.Schema({
    _id:Number,
    name: {
        type: String,
        required: [true, '昵称为必填字段'],
        maxLength: 10,
        minLength: 2,
        trim: true,//去掉两端空格
        // uppercase:true,//转为大写
    },
    phone: {
        type: Number,
        required: [true, '手机号为必填字段'],
        minLength: 11,//注意区分Number&String的写法
        maxLength: 11,
        trim: true,//去掉两端空格
    },
    sex: {
        type: Number,
        required: false,
        enmu: [0, 1,2],
        default: 0
    },
    age: {
        type: Number,
        min: 1,
        max: 150
    },
    head_url:{
        type:String
    },
    create_params: {
        version: {
            type: String,
            default: tools.version()
        },
        source_version: {
            type: String,
            default: tools._version()
        },
        time: {
            type: String,
            default: tools.date()
        },
        source_time: {
            type: String,
            default: Date.now()
        },
    },
})
const PASSWORD = new mongo.Schema({
    userInfo: {
        type: Number,
        ref: `${tools.getConfig().name}_user_info`
    },
    id: {
        type: Number
    },
    phone: {
        type: Number,
        required: [true, '手机号为必填字段'],
        minLength: 11,//注意区分Number&String的写法
        maxLength: 11,
        trim: true,//去掉两端空格
    },
    password: {
        type: String,
        required: [true, '密码为必填字段'],
        trim: true,//去掉两端空格
    },
    __v: {
        type: String,
        defalut: tools._version()
    }
})
const db_p = `${tools.getConfig().name}_user_info_p`
const db = `${tools.getConfig().name}_user_info`
const user = mongo.model(db, USERINFO, db)
const user_p = mongo.model(db_p, PASSWORD, db_p)
 export {
    user,
    user_p
 }
