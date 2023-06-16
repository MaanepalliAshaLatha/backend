import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import postRoutes from './routes/posts.js';
dotenv.config();

const port= process.env.PORT;
const app=express()
app.use(express.json());
app.use('/api/posts',postRoutes);
const connectDB=async ()=>{
    try
    {
        mongoose.set('strictQuery',true);
        mongoose.connect(process.env.MONGO_URI,{
            useNewUrlparser:true,
            useUnifiedTopology:true
        })
        console.log("mogodb connected");
    }
    catch(err)
    {
        console.error(err.message);
        process.exit(1);
    }
};
 connectDB().then(()=>{
    app.listen(port,() => console.log(`listening ${port} port`));
 }).catch(err =>console.log(err));

