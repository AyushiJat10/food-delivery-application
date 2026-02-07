import { createContext, useEffect, useState } from "react";
import axios from "axios"
export const StoreContext = createContext(null)


const StoreContextProvider = (props)=>{
    const url ="http://localhost:4000";

    const [token,setToken]= useState("");
    const [food_list,setFoodList] = useState([]);
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
   
   const fetchFoodList = async()=>{
    const response= await axios.get(url+"/api/food/list")
    setFoodList(response.data.data)

   }
   useEffect(()=>{
    async function loaddata() {
        await fetchFoodList();
        if(localStorage.getItem("token")){
        setToken(localStorage.getItem("token"));
    }
    }
    loaddata();
   },[])
    const ContextValue = {
      food_list,
      fetchFoodList,
      cartItem,
      setCartItem,
      addtoCart,
      removeFromCart,
      totalCartAmount,
      url,
      token,
      setToken,


    }
    return (
        <StoreContext.Provider value={ContextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider