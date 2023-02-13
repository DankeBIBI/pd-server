const mongo = require('mongoose')
const { server, rules, mongoDB } = require('./config')
interface err { }
mongo.connect(server,rules).then(() => {
    console.log('链接成功')
}).catch((err: err) => {
    console.log('链接失败', server)
})
module.exports = mongo