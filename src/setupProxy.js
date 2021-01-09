// The file is used to setup proxy pf traffic from backend http server

const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://aio_re_serv:8090',
            ws: true,
            changeOrigin: true
        })
    );
};