import config from '../utils/config'
import { tools } from '../utils/tools'
const mongoDB = config.mongoDB
const user = mongoDB.user
const SERVER = [
    `mongodb://${tools.decrypt(mongoDB.user_name[user])}:${tools.decrypt(mongoDB.password)}@${config.host}:${mongoDB.dbHost}/${mongoDB.dataBase}`,
    `mongodb+srv://photo_base:${tools.decrypt(mongoDB.password)}@cluster0.uk7mxbo.mongodb.net/${mongoDB.dataBase}`,
]
const LOCALHOST_SETVER = `mongodb://localhost:27017/${mongoDB.dataBase}`
export = {
    server: mongoDB.is_local ? LOCALHOST_SETVER : SERVER[user],
    rules: mongoDB.rules,
}