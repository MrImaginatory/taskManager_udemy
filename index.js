import path from 'path'
import dotenv from "dotenv/config"
// dotenv.config({ path: path.resolve(process.cwd(), '.env') });
import { app } from "./app.js";
import connectDB from "./db/database.js";


const port = process.env.PORT; //here env variables are accessible

connectDB()
    .then(()=>{
        app.listen(port, () => {
            console.log(`Server up and running at: http://localhost:${port}`);
        });
        
    })
    .catch((error)=>{
        console.log('Error connecting Database: ',error);
    })