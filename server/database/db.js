import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const User = process.env.DB_USERNAME;
const pass = process.env.DB_PASSWORD;

export const Connection = ()=>{
    const MONGODB_URI=`mongodb+srv://${User}:${pass}@merntodo.eyflnyk.mongodb.net/?retryWrites=true&w=majority&appName=MernToDo`
    mongoose.connect(MONGODB_URI,{useNewUrlParser:true});
    mongoose.connection.on(`connected`, ()=> {
        console.log(`Database connected Successfully`);

    })

    mongoose.connection.on(`disconnected`, ()=> {
        console.log(`Database disconnected`);
    })

    mongoose.connection.on(`error`, ()=>{
        console.log(`Error while connecting with the database `, error.message);
    })
}

export default Connection;