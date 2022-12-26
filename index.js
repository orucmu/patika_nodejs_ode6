const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  if (ctx.url === '/') {
    ctx.body = '<h1>Ana Sayfaya Hoşgeldiniz.<h1>';
  } else if (ctx.url === '/hakkimda') {
    ctx.body = '<h1>Hakkımda Sayfasına Hoşgeldiniz<h1>';
  } else if (ctx.url === '/iletisim') {
    ctx.body = '<h1>İletişim Sayfasına Hoşgeldiniz<h1>';
  } else {
    ctx.status = 404;
    ctx.body = '<h1>404 Sayfa bulunamadı<h1>';
  }
});

app.listen(3000);
console.log('Uygulama http://localhost:3000 adresinde çalışıyor');
