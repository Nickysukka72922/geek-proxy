const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/', createProxyMiddleware({
  target: 'https://github.io',
  changeOrigin: true,
  followRedirects: true
}));

app.listen(process.env.PORT || 3000);
