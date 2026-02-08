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

 
// List of allowed origins
const allowedOrigins = [
  "https://food-delivery-application-eight-alpha.vercel.app", // user frontend
  "https://food-delivery-application-71o5.vercel.app" // admin frontend
]

// Middleware
app.use(express.json())

app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin (like Postman)
    if(!origin || allowedOrigins.includes(origin)){
      callback(null, true)
    } else {
      callback(new Error("CORS not allowed"))
    }
  },
  credentials: true
}))


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
