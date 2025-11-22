
/*import express from "express";
import 'dotenv/config.js';
import bookRoutes from "./routers/BookRoutes.js"
import cors from 'cors';*/

/*
//create express app
const app = express();

//Enable cors to frontend
let corsOptions = {
    origin: process.env.ORIGIN
}

//middleware
app.use(express.json());
app.use(cors(corsOptions));

// This is used to log the request on the console
app.use((req, res, next)=>{
    console.log(req.path, req.method);
    next();
})
const port = 3000;

try{
    app.listen(process.env.PORT || 3000, ()=>{
        console.log(`Listening to port ${process.env.PORT || 3000}...`);
    });
}catch(e){
    console.log(e);
}

app.use('/book',bookRoutes);*/
/*
import express from "express";
import 'dotenv/config.js';
import studentRoutes from "./routers/StudentRoutes.js"
import cors from 'cors';

//init app
const app = express();

//Enable cors to frontend
let corsOptions = {
    origin: process.env.ORIGIN
}

//middleware
app.use(express.json());
app.use(cors(corsOptions));

const port = 5000;
app.use('/student',studentRoutes);

try{
    app.listen(process.env.PORT || 3000, ()=>{
        console.log(`Listening to port ${process.env.PORT || 3000}...`)
    });
}catch(e){
    console.log(e);
}

app.use('/student',studentRoutes);
*/

import express from "express";
import 'dotenv/config.js';
import BookRoutes from "./routers/BookRoutes.js"
import StudentRoutes from "./routers/StudentRoutes.js" 
import cors from "cors";
import UserRoutes from "./routers/UserRoutes.js";

//create express app
const app = express();

//ENABLE CORS TO FRONTEND
let corsOptions = {
    origin: process.env.ORIGIN
}

//middleware
app.use(express.json());
app.use(cors(corsOptions));


app.use((req, res, next) =>{
    console.log(req.path, req.method);
    next();
})

const port = 3000;

try{
    app.listen(process.env.PORT || 3000, ()=>{
        console.log(`Listening to port ${process.env.PORT || 3000}...`);
    });
}catch(e){
    console.log(e);
}

app.use('/book',BookRoutes);
app.use('/student',StudentRoutes);
app.use('/user', UserRoutes);




