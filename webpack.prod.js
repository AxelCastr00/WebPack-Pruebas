const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = { 
  mode: "production",

  output: {
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          sources: false,
        },
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      
      {
        test: '/style.css$/',
        use: [MiniCssExtract.loader, 'css-loader'],
      },

      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 8192,
            }
          },
        ],
        type: 'javascript/auto'
      },

    ],
  }, 

  optimization: {

  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'MyWebPack',
    }),
    
    new MiniCssExtract({
      filename: '[name].css', // FULLHASH: sirve mas para produccion y codificaa
      ignoreOrder: false, 
    }), 

    new CopyPlugin({
      patterns: [
        { from: 'src/asset/', to: 'assets/' }
      ],
    })
],

}