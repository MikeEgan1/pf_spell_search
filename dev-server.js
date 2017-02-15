const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server'); // eslint-disable-line import/no-extraneous-dependencies
const config = require('./webpack.config');
const compiler = webpack(config);

new WebpackDevServer(compiler, {
  publicPath: config.output.publicPath,
  // hot: true,
  historyApiFallback: true,
}).listen(8080, 'localhost', (err) => {
  if (err) {
    return console.log(err); // eslint-disable-line no-console
  }

  return console.log('Listening at http://localhost:8080/'); // eslint-disable-line no-console
});