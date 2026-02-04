import express from "express"
import cors from "cors"
import { ConnectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"


//config
const app = express()
const port =4000

 
//middleware
app.use(express.json())
app.use(cors())

//db connection
ConnectDB();

// api endpoints
 app.use('/api/food',foodRouter)
 app.use('/images',express.static('uploads'))
app.get("/",(req,res)=>{
    res.send("API working")
})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})
