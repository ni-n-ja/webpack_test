var path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const envionment = "development";

module.exports = {
    mode: envionment,
    entry: "./src/js/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js"
    },

    module: {
        rules: [
            {
                test: /\.scss$/i,
                include: [
                    path.resolve(__dirname, 'src/styles/main.scss'),
                ],
                exclude: /node_modules/,
                sideEffects: true,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                        options: {
                            url: false,
                            sourceMap: true,
                            importLoaders: 2
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        },
                    },
                ],
            },
        ],
    },
    target: ["web", "es5"],
    plugins: [
        new MiniCssExtractPlugin({
            filename: './style.css',
            ignoreOrder: true,
        })
    ]
};