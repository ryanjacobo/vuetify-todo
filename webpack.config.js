const path = require("path");
module.exports = {
    node: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(_dirname, "dist")
    },
    modules: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    }

}