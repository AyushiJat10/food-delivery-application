import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null)


const StoreContextProvider = (props)=>{
   const [cartItem,setCartItem]= useState({});
   const addtoCart =(itemId) => {
    if(!cartItem[itemId]){
        setCartItem((prev)=>({...prev,[itemId]:1}))
    }else{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
   }
    const removeFromCart =(itemId)=>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

   const totalCartAmount = ()=>{
    let totalAmount =0;
    for(const item in cartItem){
        if(cartItem[item]>0){
        let itemInfo = food_list.find((product)=>product._id === item);
        totalAmount += itemInfo.price* cartItem[item];}
    }
    return totalAmount;
   }
    const ContextValue = {
      food_list,
      cartItem,
      setCartItem,
      addtoCart,
      removeFromCart,
      totalCartAmount

    }
    return (
        <StoreContext.Provider value={ContextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider