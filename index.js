const config = require("./config");
const Koa = require("koa");
const app = new Koa();

app.use(async ctx => {
  ctx.body = await new Promise(resolve => {
    setTimeout(() => {
      resolve('Hello world!');
    }, 250);
  });
});

app.listen(config.port, () => {
  console.log(`The app is running on port ${config.port}.`);
});
