const path = require('path');

module.exports = {
   entry: path.join(__dirname, 'components', 'index'),
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'build')
   },
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'react-hot-loader!babel-loader'
         },
         {
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['babel-loader', 'eslint-loader']
         }
      ]
   },
   resolve: {
      extensions: ['.json', '.js', '.jsx', '.css']
   },
// devtool: 'source-map',
// devServer: {
//    publicPath: path.join('/dist/')
// }
};
