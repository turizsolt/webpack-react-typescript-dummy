const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'http://localhost:5555/',
    },
    mode: 'development',
    devtool: 'source-map',
    resolve: {
        extensions: [ ".ts", ".tsx", ".js", ".jsx" ],
    },
    module: {
        rules: [
            { 
                test: /\.tsx?$/,  
                exclude: /node_modules/, 
                use: "awesome-typescript-loader" 
            }
        ]
    },

    devServer: {
        contentBase: './dist',
        hot: true,
        port: 5555,
        host: 'localhost'
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
};
