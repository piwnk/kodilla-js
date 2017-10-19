const path = require('path');

module.exports = {
  // entry: path.join(__dirname, 'app', 'index'),
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
        presets: ['react', 'stage-0']
      }
    }]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css']
  }
};
