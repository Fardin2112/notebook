# 1 this is for express
const express = require('express')

// express
const app = express()

// listen for req
app.listen(4000,()=>{
    console.log('listening on port 4000')
})

# what is ejs
ejs , html dekhne wala jaisa he template engine hai jisme power jada hote 
more template engine - pug , handlebar,jade,ejs

# for use ejs
1 install - npm i ejs
2 make a folder with name views
3 app.set("view engine","ejs")
4 for render or use below code
  app.get("/",(req,res)=>{
  res.render("index")
})

# for render value
in server
         app.get("/",(req,res)=>{
           res.render("index",{age:12})
         })
in ejs
      <h3><%= age %></h3>

