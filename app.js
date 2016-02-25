var express = require('express')
var swig = require('swig')
var app = express()


app.use(express.static(__dirname + '/public'))

app.engine('html', swig.renderFile)

app.set('view engine', 'html')
app.set('views', __dirname + '/views')

app.get('/', function (req, res) {
  res.render('index')
  //res.sendFile(__dirname + '/index.html')
})

app.listen(3000, function() {
  console.log('Server running in http://localhost:3000/')
})