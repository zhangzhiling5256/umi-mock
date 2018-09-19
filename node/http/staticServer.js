const http = require('http');
const parse = require('url').parse;
const join = require('path').join;
const fs = require('fs');

const root = __dirname;

const server = http.createServer((req, res) => {
  // 解析URL以获取路径名
  const url = parse(req.url);
  // 构造绝对路径
  const path = join(root, url.pathname);
  // 检查文件是否存在
  fs.stat(path, (err, stat) => {
    if (err) {
      // 文件不存在
      if ('ENOENT' === err.code) {
        res.statusCode = 404;
        res.end('Not Found');
      }
      else {
        res.statusCode = 500;
        res.end('Internal Server Error');
      }
    }
    else {
      res.setHeader('Content-Length', stat.size);
      const stream = fs.createReadStream(path);
      stream.pipe(res);
      stream.on('error', (err) => {
        res.statusCode = 500;
        res.end('Internal Server Error');
      });
    }
  });
});

server.listen(3000, () => {
  console.log('server run at port 3000');
});
