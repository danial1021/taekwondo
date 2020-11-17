const Koa = require('koa')

const Router = require('koa-router')

const app = new Koa()
const router = new Router()
router.all('/todolist/:id', async ctx => {
  const NumTodo = ctx.params.id
  ctx.body = `<h1>Router All로 처리 중 ...</h1>

              <br>

              <p>${NumTodo}는 All로 처리하는게 맞나요??</p>`
})
router.get('/', async ctx => {
  ctx.body = `<h1>Root page</h1>

              <br>

              <p>Todolist - Root page</p>`
})
router.get('/login', async ctx => {
  ctx.body = `<h1>Login page</h1>

              <br>

              <p>Todolist - Login page</p>`
})
router.get('/about', async ctx => {
  ctx.body = `<h1>About page</h1>

              <br>

              <p>Todolist - About page</p>`
})
router.get('/todolist', async ctx => {
  ctx.body = `<h1>Todolist page</h1>

              <br>

              <p>Todolist - Todolist page</p>`
})
router.get('/register', async ctx => {
  ctx.body = `<h1>Register page</h1>

              <br>

              <p>Todolist - Register page</p>`
})
router.get('/todolist', async ctx => {
  ctx.body = `<h1>Todolist 목록 출력</h1>

              <br>

              <p>파라미터가 없으면 모든 Todolist 출력</p>`
})
router.get('/todolist/:id', async ctx => {
  const NumTodo = ctx.params.id
  ctx.body = `<h1>Todolist ${NumTodo}번 출력</h1>

              <br>

              <p>번호에 해당하는 Todolist 출력</p>`
})
router.post('/todolist', async ctx => {
  ctx.body = `<h1>Todolist 추가</h1>

              <br>

              <p>새로운 Todo 추가</p>`
})
router.put('/todolist/:id', async ctx => {
  const NumTodo = ctx.params.id
  ctx.body = `<h1>Todolist ${NumTodo}번 수정</h1>

              <br>

              <p>번호에 해당하는 Todolist 수정</p>`
})
router.delete('/todolist/:id', async ctx => {
  const NumTodo = ctx.params.id
  ctx.body = `<h1>Todolist ${NumTodo}번 삭제</h1>

              <br>

              <p>번호에 해당하는 Todolist 삭제</p>`
})
app.use(router.routes())
app.use(router.allowedMethods())
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
  console.log('Koa server is listening!')
})
