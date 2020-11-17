import Koa from 'koa'
import Router from 'koa-router'
import mongoose from 'mongoose'
import signRouter from './routes/sign'

const app = new Koa()
const router = new Router()
const { connect } = mongoose
const cfg = require('../config/index')

connect(cfg.dbUrl,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }
)
  .then(() => console.log('MongoDB 연결 성공!'))
  .catch(err => console.log(err))

router.use('/sign', signRouter)

app
  .use(router.routes())
  .use(router.allowedMethods())

app.use((ctx, next) => {
  ctx.status = 404
  next()
})

app.on('error', async (ctx, next) => {
  if (ctx.status === 404) {
    ctx.body = 'Not Found'
  }
  ctx.body = 'Internal Error'
})

app.listen(4000, () => {
  console.log('Taekwondo server is listening to port ' + 4000)
})
