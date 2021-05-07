// 代理主逻辑
const express = require("express");
const bodyParser = require("body-parser");
const multipart = require('connect-multiparty');
const axios = require("axios");
const xtpl = require('xtpl')

const app = express();
const router = express.Router();
const multipartMiddleware = multipart();

const domail = "http://127.0.0.1:8080";
const port = 8081

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(multipartMiddleware)

// 设置静态资源文件夹为static
app.use(express.static('./test'))
//设置模板,会自动去views文件夹中查找.html
app.set('views', './test')
//设置当前视图引擎中的模板的扩展名.html
app.set('views engine', '.html')
//设置解析views/.html模板的方法xtpl.renderFile,它会自动代替res.render()方法，从而使得程序的扩展性变强
app.engine('html', xtpl.renderFile)

// 渲染静态资源
router.get('/static/*', (req, res) => {
  res.render(req.path.replace('/static/', ''), {}, (err, content) => {
    if (err) {
      console.log('err')
      res.end(err)
    }
    res.end(content)
  })
})

app.all("*", multipartMiddleware, function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  if (req.method.toLowerCase() == "options") res.sendStatus(200);
  else next();
});

router.all("*", (req, res) => {
  const {
    path,
    query,
    body,
    headers
  } = req
  const url = domail + path
  axios({
    method: 'post',
    url,
    params: query,
    data: body,
    headers
  }).then(response => {
    const {
      data,
      headers: {
        'set-cookie': cookies
      }
    } = response
    cookies && cookies.forEach(item => {
      // res.cookie('x-token-cookie', 3423)
      const resutlt = item.split('; ').reduce((info, opt, index) => {
        const [name, value] = opt.split('=')
        if (index === 0) {
          info.name = name
          info.value = value
        } else {
          info[name] = value
        }
        return info
      }, {})

      const {
        name,
        value,
        ...others
      } = resutlt
      others.domail = domail
      res.cookie(name, value, others)

    })
    res.send(data);
  });
});



app.use("/", router);

app.listen(port, () => {
  console.log(`http://127.0.0.1:${port}`);
});