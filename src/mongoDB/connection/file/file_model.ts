const mongo = require('../../db'),
    { tools } = require('../../../utils/tools')
const UPLOAD_LOG = new mongo.Schema({
    user: String,
    source_version: {
        type: Number,
        default: tools._version()
    },
    file_size: String,
    img: String,
    date: String,
    status: String
})
const db = `${tools.getConfig().name}_upload_log`
export const uploadLog =  mongo.model(db, UPLOAD_LOG, db)