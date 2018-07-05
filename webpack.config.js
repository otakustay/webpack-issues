const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },
    optimization: {
        minimize: false,
        concatenateModules: true,
        sideEffects: true
    },
    plugins: [
        new HtmlWebpackPlugin({title: 'test', filename: 'index.html'})
    ],
    devServer: {
        port: 9999
    }
};
