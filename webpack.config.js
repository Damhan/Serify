const path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "./src/index.js"),
    output: {
      filename:"bundle.js",
      path: path.resolve(__dirname, '/dist')
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              'style-loader',
              // Translates CSS into CommonJS
              'css-loader',
              // Compiles Sass to CSS
              'sass-loader',
            ],
          },
          {
            test: /\.css$/,
            loaders: ["style-loader", "css-loader"]
          }
        ]
    },
    devServer: {
      contentBase: path.join(__dirname, "/dist"),
      historyApiFallback:true
      
    }

    
};

