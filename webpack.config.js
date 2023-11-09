const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

const target = process.env.target

const commonSources = {
    // Add common sources to both versions here
    // amazon: './src/amazon.js',
    // cdiscount: './src/cdiscount.js',
    amazon: './src/amazon.js',
    cdiscount: './src/cdiscount.js'
}

const v2Sources = {
    // Add v2 specific sources here
    // amazon: './src/amazon.js',
    // cdiscount: './src/cdiscount.js'
}

const v3Sources = {
    // Add v3 specific sources here

}

const commonConfig = {
    mode: process.env.mode,
    target: 'web',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, `dist/${target}`),
    },
    devServer: {
        contentBase: path.join(__dirname, `dist/${target}`),
        port: 8080,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: 'src/icons', to: 'icons' },
                { from: 'node_modules/webextension-polyfill/dist/browser-polyfill.js', to: 'polyfill.js' },
            ],
        }),
    ],
}

// Manifest V2 specific configuration
const v2Config = {
    ...commonConfig,
    entry: {
        ...commonSources,
        ...v2Sources
    },
}

// Manifest v3 specific configuration
const v3Config = {
    ...commonConfig,
    entry: {
        ...commonSources,
        ...v3Sources
    },
}

switch (target) {
    case 'v2':
        module.exports = v2Config
        break
    case 'v3':
        module.exports = v3Config
        break
    default:
        module.exports = [v2Config, v3Config]
        break
}
