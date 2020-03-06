const express = require('express')
const { join } = require('path')
const app = express()

app.disable('x-powered-by')
app.use(express.static(join(__dirname, 'build')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.listen(3000, () => {
  console.log('Running on 3000')
})
