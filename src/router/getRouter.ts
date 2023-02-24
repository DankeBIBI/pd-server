import mongo from './mongo'
import mysql from './mysql'
export const distributionRouter = (router_name: string) => {
    const ROUTE = {
        mongo:mongo,
        mysql:mysql
    }
    return ROUTE[router_name]
}