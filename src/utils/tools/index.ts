import config from '../config'
import { formatString } from './format'
export class tools {
    /**
     * 返回当前时间
     */
    static date() {
        const date = new Date()
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    }
    /**
     * 返回当前版本号
     */
    static version() {
        return config.version
    }
    static _version() {
        return config.version.replace(/\./gm, '')
    }
    /**
     * 加密
     */
    static encryption(data: string) {
        const random1 = Math.floor(Math.random() * 999)
        const random2 = Math.floor(Math.random() * 999)
        const go = (data_: string) => {
            let source = data_.split('')
            let list: string[] = source.reverse()
            list.forEach((item: any, index: any) => {
                if (item >= 0)
                    list[index] = String(item * random1 * random2)
                if ((/^[a-z]*$/g).test(item))
                    list[index] = formatString(item.toUpperCase())
                if ((/^[A-Z]*$/g).test(item))
                    list[index] = formatString(item.toLowerCase())
                if (item == '%') {
                    list[index] = 'DKEBIBI'
                }
            })
            source.push(String(random1))
            source.push(String(random2))
            let response = list.join('DKE')
            return response
        }
        return go(data)
    }
    /**
     * 解密
     */
    static decrypt(data: string) {
        const go = (data_: string) => {
            let source = data.split('DKE')
            let list: Array<any> = source.reverse()
            list.forEach((item: any, index: number) => {
                if (index > 1) {
                    if (item >= 0)
                        list[index] = String(item / list[0] / list[1])
                    if ((/^[a-z]*$/g).test(item))
                        list[index] = formatString(item.toUpperCase())
                    if ((/^[A-Z]*$/g).test(item))
                        list[index] = formatString(item.toLowerCase())
                    if (item == 'DKEBIBI')
                        list[index] = ''
                }
            })
            list.splice(0, 2)
            let response = list.join('')
            return response
        }
        return go(data)
    }
    static getConfig() {
        return config
    }
}