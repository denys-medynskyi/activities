module.exports = {
    entry: './src/app.js',
    output: {
        path: './bin',
        filename: 'app.bundle.js',
    },
    devServer: {
        inline: true,
        port: 3333
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }],
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    }
}