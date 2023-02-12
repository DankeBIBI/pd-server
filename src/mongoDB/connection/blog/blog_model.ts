// import * as mongo from '../../db'
const mongo = require('../../db')
import { tools } from '../../../utils/tools'
import config from '../../../utils/config'
const BLOG = new mongo.Schema({
    author: {
        type: Number,
        ref: `${tools.getConfig().name}_user_info`
    },
    // user_id: {
    //     type: Number,
    //     required: [true, '用户ID不能为空'],
    // },
    title: String,//文章标题
    content: String,//文章内容
    image: [],
    create_time: {
        type: String,
        default: Date
    }
})
BLOG.statics.findby
const db = `${config.name}_blog`
export const blog = mongo.model(db, BLOG, db)

