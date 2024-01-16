require('dotenv').config()
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const server = express();
const API_URL = process.env.API_URL
console.log('api',API_URL);
server.use(
  '/api',
  createProxyMiddleware({
    target: API_URL,
    changeOrigin: true,
  })
);

server.listen(3500, () => {
  console.log('Server is running on http://localhost:3500');
});