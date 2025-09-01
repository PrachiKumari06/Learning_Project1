// humne package .json me script tag me start ka diya h so hume ab pura nhi likhna padega : npm nodemon index.js just write npm start in terminal 
import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000)

