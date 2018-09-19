const http = require('http');
const url = require('url');

let items = [];

const server = http.createServer((req, res) => {

  switch (req.method) {
    case 'POST':
      let item = '';
      req.setEncoding('utf-8');
      req.on('data', (chunk) => {
        item += chunk;
      });
      req.on('end', () => {
        items.push(item);
        res.end('OK\n');
      });
      break;
    case 'GET':
      // items.forEach((item, i) => {
      //   res.write(`${i}) ${item}`);
      // });
      // res.end();
      const body = items.map((item, i) => {
        return `${i}) ${item}`;
      }).join('\n');
      res.setHeader('Content-Length', Buffer.byteLength(body));
      res.setHeader('Content-Type', 'text/plain; charset="utf-8"');
      res.end(body);
      break;
    case 'DELETE':
      const path = url.parse(req.url).pathname;
      const i = parseInt(path.slice(1), 10);

      if (isNaN(i)) {
        res.statusCode = 400;
        res.end('Invalid item id');
      }
      else if (!item[i]) {
        res.statusCode = 404;
        res.end('Item not found');
      }
      else {
        items.splice(i, 1);
        res.end('OK\n');
      }
      break;
  }

});

server.listen(3000, () => {
  console.log('server run at port 3000');
});