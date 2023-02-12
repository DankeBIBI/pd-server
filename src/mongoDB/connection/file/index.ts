import { tools } from '../../../utils/tools'
import fs from 'fs'
import { uploadLog } from './file_model'
import config from '../../../utils/config'
import { findUser } from '../userInfo'
import type { Context, request } from '../../../utils/interface'
export class UPLOAD {
    static async upload(src: Context | request) {
        let data = src.request.body
        if (!data.user_id) {
            src.fail('请先登录')
            return
        }
        if (!await findUser({ _id: data.user_id })) {
            src.fail('用户不存在')
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
        try {
            await createFolder()
            const file: any = src.request.files.file,
                readStream = fs.createReadStream(file.path),
                // dir = `${path.join(__dirname, 'static/upload')}`,
                file_path = `${localPath}/${file.name}`,
                writeStream = fs.createWriteStream(file_path),
                pipe = () => {
                    return new Promise((resolve, reject) => {
                        readStream.pipe(writeStream)
                        resolve(true)
                    })
                },
                param = {
                    user: data.user_id,
                    status: '上传成功',
                    file_size: file.size < 1000000 ? (file.size / 1000).toFixed(2) + 'KB' : (file.size / 1000 / 1000).toFixed(2) + 'MB',
                    date: tools.date(),
                    img: `http://${config.localHost}:${config.port}/upload/${data.folder}/${file.name}`
                }
            await pipe()
            const res = await uploadLog.create(param)
            src.success('上传成功', param)
        } catch (error) {
            src.fail(501, '上传失败', error)
        }
    }
}