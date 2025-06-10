const path = require('path');

module.exports = {
    entry: './src/index.js', // Kirish nuqtasi
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.svg$/i,
                use: [
                    {
                        loader: '@svgr/webpack',
                        options: {
                            svgo: false, // SVG optimizatsiya qilishni o‘chirib qo‘yish (kerak bo‘lsa)
                        },
                    },
                ],
            },
            // boshqa qoidalar
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
    },
};
