module.exports = {
    entry: "./src/main.jsx",
    output: {
        path: __dirname,
        filename: 'main.js',
        libraryTarget: "commonjs2"
    },
    devtool: "none", // prevent webpack from using eval() on my module
    externals: {
        uxp: 'uxp',
        os: 'os',
        scenegraph: 'scenegraph',
        application: 'application'
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    plugins: [
                        "transform-react-jsx",
                        "transform-object-rest-spread",
                    ]
                }
            },
            {
                test: /\.png$/,
                exclude: /node_modules/,
                loader: 'file-loader'
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.svg$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            plugins: [
                                "transform-react-jsx"
                            ]
                        }
                    },
                    {
                        loader: "react-svg-loader",
                        options: {
                            jsx: true
                        }
                    }
                ]
            }
        ]
    }
};