const path = require('path');

module.exports = {
   entry: path.join(__dirname, 'components', 'index'),
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'build')
   },
   module: {
      rules: [{
         test: /.jsx?$/,
         include: [
            path.resolve(__dirname, 'components')
         ],
         exclude: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'bower_components')
         ],
         loader: 'babel-loader',
         query: {
            presets: ['react', 'env'] // , 'stage-0'] // , 'env']
         }
      }],
      // loaders: [
      //    {
      //       test: /\.jsx?$/,
      //       exclude: /node_modules/,
      //       loader: 'react-hot-loader!babel-loader'
      //    },
      //    {
      //       test: /\.js$/,
      //       exclude: /node_modules/,
      //       loaders: ['babel-loader', 'eslint-loader']
      //    }
      // ]
   },
   resolve: {
      extensions: ['.json', '.js', '.jsx', '.css']
   },
};

