const path = require('path');

module.exports = {
    mode: 'development',
    context: __dirname,
    module: {
        rules: [
            {
                test: /\.worker\.js$/,
                use() {
                    return [
                        {
                            loader: 'worker-loader',
                            options: {
                                name: '[name].[hash].js',
                            },
                        },
                        {
                            loader: 'babel-loader',
                            options: {
                            }
                        },
                    ];
                }
            },
        ],
    },
};
