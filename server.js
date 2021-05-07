// 服务端
const express = require('express')
const bodyParser = require('body-parser')
const multipart = require('connect-multiparty');

const app = express()
const router = express.Router()
const multipartMiddleware = multipart();

app.use(multipartMiddleware)
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

// 中间件处理文件请求
app.all('*', multipartMiddleware, function (req, res, next) {
  if (req.method.toLowerCase() == "options") res.sendStatus(200);
  else next();
})


router.all('/test', function (req, res) {
  const {
    body,
    query
  } = req
  // 模拟服务端设置cookies
  res.cookie('x-token-cookie', '3423')
  res.cookie('x-token-cookie1', '3423wqe')
  res.cookie('x-token-cookie2', 'gwegwegowej')
  res.send({
    data: body,
    params: query,
    headers: req.headers
  })
})


app.use('/', router)


app.listen('8080', () => {
  console.log('http://127.0.0.1:8080')
})