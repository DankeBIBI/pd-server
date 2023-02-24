import {Model,rules,DataTypes} from '../db'
export class KEY extends Model{
    declare u_key:string
}
KEY.init({
    u_key:{
        type:DataTypes.STRING,
        primaryKey:true
    }
},{...rules,modelName:'pd_key',timestamps:false})