import path from 'path';
import app from './config/express';

// enable webpack hot module replacement in development mode
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack/webpack.config.dev';

if (process.env.NODE_ENV === 'development') {

    const compiler = webpack(webpackConfig);
    app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: webpackConfig.output.publicPath}));
    app.use(webpackHotMiddleware(compiler));
}


// Landing page
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(app.get('port'), app.get('host'), () => {
    console.log(`Server running at http://${app.get('host')}:${app.get('port')}`);
});

export default app;
