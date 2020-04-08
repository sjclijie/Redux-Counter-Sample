const path = require('path');

module.exports = {
    entry : path.resolve(__dirname, '../src/app.js'),
    output: {
        path    : path.resolve(__dirname, '../dist/'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {test: /\.css$/, loader: 'style!css'},
            {
                test: /\.js$/, loader: 'babel-loader', query: {
                    presets: [
                        '@babel/preset-react',
                        ['env', {
                            targets: {
                                browsers: ["last 2 versions", "safari >= 7"]
                            }
                        }]
                    ]
                }
            },
            {
                test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    }
};
