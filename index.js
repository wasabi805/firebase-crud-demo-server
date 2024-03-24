require('dotenv').config()

const express = require('express')
const cors = require('cors')

const port = 3000

const { db } = require("./configs")
const app = express()
app.use(express.json())
app.use(cors())



app.get('/', async(req, res) => {
  const User = db.collection('Users')
  console.log('what is User', User)


  res.send('Hello World!')
})

app.post('/create', async(req, res)=>{
    const data = req.body
    console.log('req.body', data)
    const { name } = req.body

    const User = db.collection('Users').doc('name')
    const response = await User.set({
      name,
    })
    console.log('this is the response', Object.keys(response))
    res.send({msg: 'User added'})
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})