// 服务端
const express = require('express')
const bodyParser = require('body-parser')
const multipart = require('connect-multiparty');
const path = require('path')

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
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
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

router.post('/upload', function (req, res) {
  res.send({
    data: {
      link: `http://192.168.22.32:8080/data/${req.files.file.path}`,
      name: req.body.fileName
    }
  })
})


router.get('/data/*', function (req, res) {
  try {
    res.sendFile(path.join(__dirname, req.path.slice(6)), function (err) {
      if (err) {
        res.sendStatus(404)
      }
    })
  } catch (err) {
    console.log(err)
  }
})

router.get('/web_code/*', function (req, res) {
  try {
    res.sendFile(path.join(__dirname, 'web_code', req.params[0]), function (err) {
      if (err) {
        res.sendStatus(404)
      }
    })
  } catch (err) {
    console.log(err)
  }
})

app.use('/', router)


const port = 8080
app.listen(port, () => {
  console.log(`http://127.0.0.1:${port}`)
})