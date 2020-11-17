import Router from 'koa-router'
const sign = new Router()

sign.get('/', async (ctx, next) => {
  ctx.body = 'Hello'
})

export default sign.routes()
