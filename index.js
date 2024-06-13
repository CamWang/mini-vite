// Node 服务器，处理各种加载资源请求
// TODO index.html
// TODO js
// TODO vue

const Koa = require('koa');
const app = new Koa();
const fs = require('fs');
const path = require('path');

app.use(async ctx => {
  const { url } = ctx.request;
  if (url === '/') {
    ctx.type = "text/html";
    ctx.body = fs.readFileSync("./index.html", "utf8");
  } else if (url.endsWith('.js')) {
    // js加载
    const p = path.join(__dirname, url);
    ctx.type = "application/javascript"
    ctx.body = fs.readFileSync(p, "utf8");
  }
});

app.listen(3000, () => {
  console.log("http://localhost:3000/");
});