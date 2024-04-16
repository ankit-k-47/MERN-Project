import dotenv from "dotenv";
import connection from './db/db.js' ;
import express from "express";
import { app } from "./app.js";
dotenv.config({
    path : './env'
})

connection().then(()=>{
     app.on("error",error=>{
            console.log(error);
            throw error
        })
    app.listen(process.env.PORT||8000,()=>{
        console.log(`Server running on ${process.env.PORT}`);
    })
}).catch((error)=>{
    console.log(error);
})
// ;(async ()=>{
//     try {
//       await  mongoose.connect(`${process.env.MONGO_URI}/${dbname}`)
        // app.on("error",error=>{
        //     console.log(error);
        //     throw error
        // })
//         app.listen(process.env.PORT,()=>{
//             console.log(`App listening on port ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.error("Error",error)
//         throw error
//     }
// })() //iife(immediately invoked function expression)