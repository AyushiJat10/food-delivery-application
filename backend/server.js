import express from "express"
import cors from "cors"
import { ConnectDB } from "./config/db.js"


//config
const app = express()
const port =4000

ConnectDB();

//middleware
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("API working")
})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})


//mongodb+srv://aayushijat8_db_user:8641074834@cluster1.fkpyp4g.mongodb.net/?appname:cluster1