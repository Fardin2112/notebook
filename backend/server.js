require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')


// express
const app = express()
app.set("view engine","ejs")
 
//middleware
app.use((req,res,next)=>{
  console.log("i am middleware")
  next();
})

//routes
// app.get('/',(req,res)=>{
//   res.send('Hello express')
// })
// app.get('/api/:username',(req,res)=>{
//   res.send(`Hello ${req.params.username}`)
// })
app.get("/",(req,res)=>{
  res.render("index",{age:12})
})

// connect to mongodb
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  //listen for request
  app.listen(process.env.PORT, () => {
    console.log(" connected to db and listening on port",process.env.PORT);
  })
})
.catch((error) => {
  console.log(error)
})
