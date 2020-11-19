import Router from 'koa-router'
const user = new Router()

user.post('/', async (ctx, next) => {
  const u = ctx.request.body
  // ctx.body = 'Hello'
  if (u) {
    console.log(u)
  } else {
    next()
  }
})

export default user.routes()
