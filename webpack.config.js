const path = require('path')
const polyfill = require('node-polyfill-webpack-plugin')
const externals = require('webpack-node-externals')
module.exports = {
    entry: {
        index: `${path.join(__dirname, __dirname.indexOf(':') != -1 ? 'src\\index.ts' : 'src\/index.ts')}`
    },
    // output: {
    //     path: path.join(__dirname, 'webpack'),
    //     filename: 'index.js'
    // },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                // include: [resolve('src')]
            },
            {
                test: /\.(jpe?g|png|)$/i,
                type: "asset",//资源
                generator: {
                    filename: "img/[name][ext]",
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 1080 * 1920
                    }
                }
            }
        ],
    },
    resolve: {
        extensions: [
            '.ts'
        ]
    },
    mode: 'production',
    plugins: [new polyfill()],
    target: 'node',
    externals: [new externals()]
}