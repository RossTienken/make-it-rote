const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const port = 3000

app.disable('x-powered-by')
app.use(morgan('dev'))
app.use(express.static('public'))

app.listen(port, listener => console.log(`listening on port ${port}`))

app.get('/api', function(req,res,next){
  res.json({'API': 'Welcome to the API'})
})

app.use(function(req,res,next){
  res.status(404).json({error: '404 not found'})
})

app.use(function(err,req,res,next){
  const stat = err.status || 500
  res.status(stat).json({error: err})
})
