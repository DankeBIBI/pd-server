const mongo = require('mongoose')
const { server,rules } = require('./config')
interface err{}
mongo.connect(server, rules).then(() => {
    console.log('链接成功')
}).catch((err:err)=>{
    console.log('链接失败')
})
module.exports = mongo