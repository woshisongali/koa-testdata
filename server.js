// const Koa = require('koa')
import Koa from 'koa'
import cors from 'koa2-cors'
// import './simple-test/testAsync'
const app = new Koa()
const canPatharr = ['new', 'jsonp']

app.use(cors(
  {
    origin: '*',
    allowMethods: 'GET, POST, PUT, HEAD, OPTIONS'
  }
))
app.use( async ( ctx ) => {
  let analysisPath = ctx.path.split('\/')
  let currfirst = (analysisPath[0]) ? analysisPath[0] : analysisPath[1]
  let data
  if (canPatharr.indexOf(currfirst) > -1) {
    console.log('test data')
    data = 'test data'
  } else {
    // console.log('do nothing')
  }
  let response = {
    contxt: 'hello koa2',
    query: ctx.query,
    path: ctx.path,
    currfirst: currfirst,
    data: data || null
  }
  ctx.body = JSON.stringify(response)
})


app.listen(3000)
console.log('[demo] start-quick is starting at port 3000')