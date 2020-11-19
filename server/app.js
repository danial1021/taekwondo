import Koa from 'koa'
import Router from 'koa-router'
import mongoose from 'mongoose'
import userRouter from './routes/user'
import cors from '@koa/cors'
import bodyParser from 'koa-bodyparser'

const app = new Koa()
const router = new Router()
const { connect } = mongoose
const cfg = require('../config/index')

app.use(cors())
app.use(bodyParser())

connect(cfg.dbUrl,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }
)
  .then(() => console.log('MongoDB 연결 테스트 성공!'))
  .catch(err => console.log(err))

// const db = mongoose.connection
// db.on('error', console.error.bind(console, 'connection error'))
// db.once('open', () => {
//   console.log('DB connected')
// })

// const CatSchema = mongoose.Schema({
//   name: String,
//   age: Number
// })
// const Cat = mongoose.model('Kitty', CatSchema)
// var silence = new Cat({ name: 'Silence', age: 3 })
// silence.save()
// var adam = new Cat({ name: 'Adam', age: 1 })
// adam.save()
// var ross = new Cat({ name: 'Ross', age: 5 })
// ross.save()

router.get('/', (ctx, next) => {
  const { test } = ctx.request.query
  ctx.body = 'test로 보낸 data: ' + test
  console.log(ctx.body)
})
router.use('/api/user', userRouter) // router 설정

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
