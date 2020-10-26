const Koa = require('koa')
const mongoose = require('mongoose');
const app = new Koa()
const cors = require('cors');
app.use(cors());

const mongoURI = 'mongodb://localhost:27017/Taekwondo'

mongoose
  .connect(
    mongoURI,
    { useNewUrlParser: true }
  ) 
  .then(() => console.log('MongoDB 연결 성공'))
  .catch(err => console.log(err))

app.use(ctx => {
  ctx.body = 'Hello Koa'
})

app.use('/', require('./routes/home'));
app.use('/posts', require('routes/posts'));

app.listen(4000, () => {
  console.log('node server is listening to port 4000')
})