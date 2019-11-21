const http = require('http');
const chalk = require('chalk');
const path = require('path');
const conf = require('./config/defaultConfig.js');
const route = require('./helper/route.js');

const server = http.createServer((req, res) => {
  const filePath = path.join(conf.root, req.url); //获取根路径 + url /Users/Benny/Desktop/node/lyqanydoor/asd/a/lyq123
  route(req, res, filePath);
});

server.listen(conf.port, conf.hostname, () => {
  console.log(`Server running at ${chalk.green(`http://${conf.hostname}:${conf.port}/`)}`);
});

