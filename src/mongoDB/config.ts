import config from '../utils/config'
import { tools } from '../utils/tools'
const mongoDB = config.mongoDB
export = {
    server: `mongodb://${tools.decrypt(mongoDB.user)}:${tools.decrypt(mongoDB.password)}@${config.host}:${mongoDB.dbHost}/${mongoDB.dataBase}`,
    rules: mongoDB.rules,
}