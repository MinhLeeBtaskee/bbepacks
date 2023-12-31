// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');

const isProduction = process.env.NODE_ENV == 'production';

const config = {
    entry: './src/index.ts',
    // output: {
    //     path: path.resolve(__dirname, 'dist'),
    // },
    plugins: [
        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    output: {
        filename: '[name].js',
        chunkFilename: '[name].js',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            // {
            //     test: /\.(tsx|ts)$/,
            //     loader: 'ts-loader',
            //     exclude: /node_modules/,
            // },
            {
                test: /\.(js|jsx|tsx|ts)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts'],
    },
    externals: [
    ],
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';

    } else {
        config.mode = 'development';
    }
    return config;
};
