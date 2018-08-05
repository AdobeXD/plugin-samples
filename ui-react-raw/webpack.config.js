module.exports = {
    entry: "./src/main.js",
    output: {
        path: __dirname,
        filename: 'main.js',
        libraryTarget: "commonjs2"
    },
    optimization: {        
        minimize: false
    }
};