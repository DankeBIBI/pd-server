import { Context, request, file } from '../../../utils/interface'
import { tools } from '../../../utils/tools'
import fs from 'fs'
import config from '../../../utils/config'
import { OSS } from '../../../utils/aliOss'
import { UPLOAD_LOG_M } from './model'
import { USER_M } from '../user/model'
import { findUser } from '../user/index'
UPLOAD_LOG_M.belongsTo(USER_M, {
    as: 'userInfo',
    foreignKey: 'u_id',
    targetKey: 'u_id'
})
export class TOOLS {
    /**
     * 加密
     */
    static encryption(src: Context) {
        const msg = src.request.url.split('/api/encryption?msg=')[1]
        src.body = tools.encryption(msg)
    }
    /**
     * 解密
     */
    static decrypt(src: Context) {
        const msg = src.request.url.split('/api/decrypt?msg=')[1]
        src.body = tools.decrypt(msg)
    }
    static async upload(src: Context | request) {
        const data = src.request.body
        if (!data.user_id) {
            src.fail('请登录', 501)
            return
        }
        if (await findUser({ u_id: data.user_id }) == false) {
            src.fail('用户未注册', 501)
            return
        }
        if (!fs.existsSync('static')) {
            fs.mkdirSync('static')
        }
        let localPath = `static/upload/${data.folder}`
        const checkFolder = (new_folder: string) => {
            return new Promise((resolve, reject) => {
                fs.exists(new_folder, (status_) => {
                    if (status_) {
                        resolve(true)
                    } else {
                        try {
                            fs.mkdirSync(new_folder)
                        } catch (e) {
                            src.fail(new_folder + '创建失败')
                        }
                        resolve(true)
                    }
                })
            })
        }
        const createFolder = () => {
            return new Promise((resolve, reject) => {
                fs.exists(localPath, async (status) => {
                    if (!status) {
                        let file_folder = localPath.split('/')
                        let new_folder = file_folder[0]
                        for (let i = 0; i < file_folder.length; i++) {
                            if (i > 0) {
                                new_folder = `${new_folder}/${file_folder[i]}`
                                await checkFolder(new_folder)
                                if (i == file_folder.length - 1) {
                                    resolve(true)
                                }
                            }
                        }
                    } else {
                        resolve(true)
                    }
                })

            })
        }
        const file: file = src.request.files.file
        const param_ = {
            user: data.user_id,
            status: '上传成功',
            size: file.size < 1000000 ? (file.size / 1000).toFixed(2) + 'KB' : (file.size / 1000 / 1000).toFixed(2) + 'MB',
            date: tools.date(),
            filePath: `http://${config.host}:${config.port}/upload/${data.folder}/${file.name}`
        }
        const uploadOss = async () => {
            try {
                const res = await OSS.upload(data.folder + '/' + file.name, file.path)
                // param_.filePath = config.aliOss.path + data.folder + '/' + file.name
                param_.filePath = res.res.requestUrls[0]
                return {
                    ...param_,
                    code: res.res.statusCode
                }
            } catch (e) { src.fail(e) }
        }
        const uploadLocation = async () => {
            await createFolder()
            const readStream = fs.createReadStream(file.path),
                // dir = `${path.join(__dirname, 'static/upload')}`,
                file_path = `${localPath}/${file.name}`,
                writeStream = fs.createWriteStream(file_path),
                pipe = () => {
                    return new Promise((resolve, reject) => {
                        readStream.pipe(writeStream)
                        resolve(true)
                    })
                }

            await pipe()
            // const res = await uploadLog.create(param_)
            return param_
        }
        try {
            const res: any = data.is_local ? await uploadLocation() : await uploadOss()
            await UPLOAD_LOG_M.create({ u_id: data.user_id, size: param_.size })
            if (res.code == 200 && !data.is_local) {
                return src.success('上传成功', res)
            } else if (res.code != 200 && !data.is_local) {
                return src.fail(501, '上传失败')
            }
            src.success('上传成功', res)
        } catch (error) {
            console.log("🚀这是打印的数据哦 ~ error:", error)
            src.fail(501, '上传失败')
        }
    }
}
