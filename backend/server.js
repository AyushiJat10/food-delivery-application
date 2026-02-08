import express from "express"
import cors from "cors"
import { ConnectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/UserRoute.js"
import "dotenv/config"
import cartRouter from "./routes/CartRoute.js"


//config
const app = express()
const port = process.env.PORT || 4000;

 
//middleware
app.use(express.json())
import cors from "cors";

app.use(cors({
  origin:[ "https://food-delivery-application-eight-alpha.vercel.app/",
  "https://food-delivery-application-71o5.vercel.app/"],
  credentials: true
}));


//db connection
ConnectDB();

// api endpoints
 app.use('/api/food',foodRouter)
 app.use('/images',express.static('uploads'))
 app.use('/api/user',userRouter);
app.use('/api/cart',cartRouter);


app.get("/",(req,res)=>{
    res.send("API working")
})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})
