const express=require('express');
const app=express();
const port =4000;
const mongo=require('./connect');
const router=require('./routes/booksRouter');
const cors=require('cors')
  //middlewares
app.use(express.json());
app.use(cors())
app.use("/books",router);

//connecting to db
mongo.connect();

app.listen(port,()=>console.log(`server started on port number ${port}`))


//