const fs = require('fs');
const path = require('path');
const koa = require('koa');
const staticMiddleware = require('koa-static');
const logger = require('koa-logger');
const compress = require('koa-compress');
const Router = require('koa-router');
const config = require('./config');

// 初始化koa
let app = new koa();
// 日志
app.use(logger());
// 压缩
app.use(compress({
  // filter: function (content_type) {
  //   return /text/i.test(content_type)
  // },
  threshold: 2048,
  flush: require('zlib').Z_SYNC_FLUSH
}));

// 所有请求返回 index.html
// app.use(async function returnIndex(ctx, next) {
//   const result = await fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8');
//   // console.log(result);
//   ctx.type = 'html';
//   ctx.body = result;
//   next();
// });

// 静态路由
app.use(staticMiddleware(path.join(__dirname, '../dist')));

const router = new Router();
router.get('/*', async (ctx, next) => {
  const result = await fs.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf8');
  ctx.type = 'html';
  ctx.body = result;
  // next();
});
app.use(router.routes()).use(router.allowedMethods());

// 开启服务
app.listen(config.port, () => {
  console.log(`server run at port: 127.0.0.1:${config.port}`);
});
