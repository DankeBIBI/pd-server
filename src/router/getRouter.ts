import mongo from './mongo'
import mysql from './mysql'
export const distributionRouter = (router_name: string) => {
    if (router_name === 'mongo')
        return mongo
    if (router_name === 'mysql')
        return mysql

}