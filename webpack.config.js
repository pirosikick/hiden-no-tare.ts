const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    client: ['./client.tsx']
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, '.tmp', 'scripts')
  },
  module: {
    loaders: [
      {
        loader: 'ts-loader',
        test: /\.tsx?/,
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js']
  }
};
