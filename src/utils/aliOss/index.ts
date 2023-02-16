import config from '../config'
import { tools } from '../tools'
const oss = require('ali-oss');
const client = new oss({
    region: config.aliOss.region,
    accessKeyId: tools.decrypt(config.aliOss.accessKeyId),
    accessKeySecret: tools.decrypt(config.aliOss.accessKeySecret),
    bucket: config.aliOss.bucket
});
const params = {
    callback: {
        // 设置回调请求的服务器地址，例如http://oss-demo.aliyuncs.com:23450。
        url: 'https://pd-base.oss-cn-heyuan.aliyuncs.com/',
        //（可选）设置回调请求消息头中Host的值，即您的服务器配置Host的值。
        //host: 'yourCallbackHost',
        // 设置发起回调时请求body的值。
        body: 'bucket=${bucket}&object=${object}&var1=${x:var1}',
        // 设置发起回调请求的Content-Type。
        contentType: 'application/x-www-form-urlencoded',
        // 设置发起回调请求的自定义参数。
        customValue: {
            var1: 'value1',
            var2: 'value2'
        }
    },
    // headers: {
    //     // 指定Object的存储类型。
    //     'x-oss-storage-class': 'Standard',
    //     // 指定Object的访问权限。
    //     'x-oss-object-acl': 'private',
    //     // 通过文件URL访问文件时，指定以附件形式下载文件，下载后的文件名称定义为example.jpg。
    //     // 'Content-Disposition': 'attachment; filename="example.jpg"'
    //     // 设置Object的标签，可同时设置多个标签。
    //     'x-oss-tagging': 'Tag1=1&Tag2=2',
    //     // 指定PutObject操作时是否覆盖同名目标Object。此处设置为true，表示禁止覆盖同名Object。
    //     'x-oss-forbid-overwrite': 'true',
    // }
}
export class OSS {
    static client = client
    static async ossList() {
        try {
            const result = await this.client.listBuckets();
            return result
        } catch (err) {
            return false
        }
    }
    static async upload(name: string, file: string) {
        try {
           
            return await this.client.put(name, file,params);
        } catch (e) {
            console.log(e);
        }
    }
}