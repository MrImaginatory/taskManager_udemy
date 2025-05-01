import path from 'path'
import dotenv from "dotenv/config"
import { app } from "./app.js";
import connectDB from "./db/database.js";


const port = process.env.PORT;

connectDB()
    .then(()=>{
        app.listen(port, () => {
            console.log(`Server up and running at: http://localhost:${port}`);
        });
        
    })
    .catch((error)=>{
        console.log('Error connecting Database: ',error);
    })