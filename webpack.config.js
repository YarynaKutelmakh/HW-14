const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
                {
                    loader: 'file-loader'
                }
            ]
        },
        {
            test: /\.(jpe?g|png|gif|svg)$/i,
            use: [
                'url-loader?limit=10000',
                'img-loader'
                // {
                //     loader: 'img-loader',
                //     options: {
                //         plugins: [require('imagemin-pngquant')({
                //             floyd: 0.5,
                //             speed: 2
                //         })]
                //     }
            //    } 
            ],

        }
        ]
    },
    plugins: [new HtmlWebpackPlugin()]
}