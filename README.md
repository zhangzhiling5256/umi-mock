# 学习资料网站

- [react](https://react.docschina.org/)
- [umi](https://umijs.org/zh/)
- [dva](https://dvajs.com/)
- [ant](https://ant.design/index-cn)
- [ant-moible](https://mobile.ant.design/index-cn)
- [印记中文](https://docschina.org/)

## 目录结构

``` structure
├── dist/                          // 构建产物目录
├── mock/                          // mock 文件所在目录，基于 express
└── src/                           // 源码目录，可选，把里面的内容直接移到外面即可
    ├── layouts/
    │   └── index.js               // 全局布局
    ├── pages/                     // 页面目录，里面的文件即路由
        ├── .umi/                  // dev 临时目录，需添加到 .gitignore
        ├── .umi-production/       // build 临时目录，会自动删除
        ├── document.ejs           // HTML 模板
        ├── 404.js                 // 404 页面
        ├── page1.js               // 页面 1，任意命名
        └── page2.js               // 页面 2，任意命名
    ├── global.css                 // 约定的全局样式文件，自动引入，也可以用 global.less
    ├── global.js                  // 可以在这里加入 polyfill
├── test/                          // 测试用例放这里
├── .umirc.js                      // umi 配置
└── package.json

```

## 多布局文件写法

在 layouts -> index.js 文件中使用 location.pathname 来判断使用不同的布局。

``` code
function Layout({children, location}) {
  if (location.pathname !== '/login') {
    return (
      <div>
        <Header location={location} />
        <div>
          {children}
        </div>
      </div>
    );
  }
  else {
    return (
      <div>login layout</div>
    );
  }
}
```

## 覆盖全局样式的写法

``` css modules global

:global(.am-button) {
  background-color: #999;
}

```

## git线上强制覆盖本地命令

- git fetch --all
- git reset --hard origin/master
- git pull

## 默认生成的html页面代码

```html

<!doctype html><html><head><meta charset="utf-8"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="black"><meta name="format-detection" content="telephone=no"><meta name="format-detection" content="email=no"><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no"><title></title><link rel="stylesheet" href="/static/umi.1a8e0f13.css"></head><body><div id="root"></div><script>window.routerBase = '/';
  window.publicPath = '/static/';</script><script src="/static/umi.d5831dd9.js"></script></body></html>

```