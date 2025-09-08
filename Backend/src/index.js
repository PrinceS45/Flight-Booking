import express from 'express' ; 
import {PORT} from "./config/index.js" ; 


const app = express () ; 

app.use(cors()) ; 

app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`) ;
})