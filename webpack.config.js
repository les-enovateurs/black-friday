const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

const commonOutputDir = "dist"
const v2OutputDir = `${commonOutputDir}/v2`
const v3OutputDir = `${commonOutputDir}/v3`

const commonSources = {
    // Add common sources to both versions here
    cdiscount: './src/cdiscount.js',
    borderify: './src/borderify.js',
}

const v2Sources = {
    // Add v2 specific sources here
}

const v3Sources = {
    // Add v3 specific sources here
}

const commonConfig = {
    mode: process.env.mode,
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
    target: 'web',
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "src/icons", to: "icons" },
                { from: "node_modules/webextension-polyfill/dist/browser-polyfill.js", to: "polyfill.js" },
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
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, v2OutputDir),
    },
    devServer: {
        contentBase: path.join(__dirname, v2OutputDir),
        port: 8080,
    },
}

// Manifest v3 specific configuration
const v3Config = {
    ...commonConfig,
    entry: {
        ...commonSources,
        ...v3Sources
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, v3OutputDir),
    },
    devServer: {
        contentBase: path.join(__dirname, v3OutputDir),
        port: 8080,
    },
}

switch (process.env.target) {
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
