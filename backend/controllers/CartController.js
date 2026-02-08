import userModel from "../models/UserModel.js";


//add to cart
const addToCart = async (req,res)=>{
try {
    const userdata = await userModel.findOne({_id:req.userId});
    const cartData = await userdata.cartData;
    if(!cartData[req.body.itemId]){
        cartData[req.body.itemId] =1;
    }else{
        cartData[req.body.itemId] +=1;
    }
    await userModel.findByIdAndUpdate(req.userId,{cartData});
    return res.json({success:true,message:"Added to the cart"});
} catch (error) {
    console.log(error);
    return res.json({success:false,message:"ERROR"});
}

}

//remove from cart
const removeFromCart = async (req,res)=>{
try {
    const userdata = await userModel.findOne({_id:req.userId});
    const cartData = await userdata.cartData;
    if(cartData[req.body.itemId] > 0){
        cartData[req.body.itemId] -=1;
    }
    await userModel.findByIdAndUpdate(req.userId,{cartData});
    return res.json({success:true,message:"Removed from  the cart"});
} catch (error) {
    console.log(error);
    return res.json({success:false,message:"ERROR"});
}


}


//fetch cart data
// const getCart = async (req,res)=>{
// try {
//     const cartData = await userdata.cartData;
//      res.json({success:true,cartData});
// } catch (error) {
//     console.log(error);
//     res.json({success:false,message:"ERROR"});
// }
// }
const getCart = async (req, res) => {
  try {
    const userdata = await userModel.findOne({ _id: req.userId });

    if (!userdata) {
      return res.json({ success: false, message: "User not found" });
    }

    const cartData = userdata.cartData;

    return res.json({ success: true, cartData });

  } catch (error) {
    console.log(error.message);
    return res.json({ success: false, message: error.message });
  }
};

export {addToCart,removeFromCart,getCart};