import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import route from './app/routes/index.js'

const app =express();


//Connect to database 
const url ="mongodb://localhost:27017/restful_db"
mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology:true
});

const db =mongoose.connection;
db.on('error', (error)=> console.error(error));
db.once('open', () => console.log('Database Connected'));

//midlleware
app.use(cors());
app.use(express.json());
app.use('/product',route)

const port=3000
app.listen(port,()=>{
    console.log(`Server berjalan di port ${port}`)
})
