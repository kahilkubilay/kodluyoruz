import Koa from 'koa'

const app = new Koa()
const port = 3000
const pages = ['/', '/about', '/contact']

app.use(ctx => {
    const { path } = ctx

    let urlState = pages.find(page => page === path)

    if(urlState !== undefined) {
        ctx.status = 200;
        ctx.body = `<h1>Welcome the ${urlState} page.</h1>`
    } else {
        ctx.status = 404;
        ctx.body = `<h1>${urlState} page is not available.</h1>`
    }
});
  
app.listen(port)