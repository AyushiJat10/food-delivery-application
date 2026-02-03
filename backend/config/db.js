import mongoose from "mongoose";

 export const ConnectDB = async ()=>{
    await mongoose.connect('mongodb+srv://aayushijat8_db_user:8641074834@cluster1.fkpyp4g.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}