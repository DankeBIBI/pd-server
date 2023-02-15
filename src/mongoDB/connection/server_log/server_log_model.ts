import { tools } from '../../../utils/tools'
const mongo = require('../../db')
const SERVER_LOG_MODEL = new mongo.Schema({
    start_time: {
        type:String,
        default: tools.date()
    },
    state: { type: String }
})
const db = `${tools.getConfig().name}_server_log`
export const server_log =  mongo.model(db, SERVER_LOG_MODEL, db)
