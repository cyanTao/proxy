// 服务端
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const router = express.Router()
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart({
  uploadDir: './upload'
});

const mockData = require('./mockData')

app.use(multipartMiddleware)
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

// 中间件处理文件请求

app.all('*', multipartMiddleware, function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  if (req.method.toLowerCase() == "options") res.sendStatus(200);
  else next();
})

router.all('*', async function (req, res) {
  const result = mockData[req.path]
  if (result) {
    res.send(typeof result === 'function' ? await result(req) : result)
  } else {
    res.status(404).end()
  }
})


app.use('/', router)

const port = 8081
app.listen(port, () => {
  console.log(`http://127.0.0.1:${port}`)
})