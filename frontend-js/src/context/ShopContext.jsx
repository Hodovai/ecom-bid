import React ,{ createContext, useEffect } from 'react'
import { products } from '../assets/frontend_assets/assets';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '$'
    const delivery_fee = 10;
    const [search,setSearch] = React.useState('');
    const [showSearch,setShowSearch] = React.useState(false);
    const [cartItems, setCartItems] = React.useState([]);
    const navigate = useNavigate()
    const addToCart = async (itemId,size) => {
      if(!size){
        toast.error('Select Product Size')
        return;
      }
      // Add item to cart
      let cartData = structuredClone(cartItems);
      if(cartData[itemId]){
        if(cartData[itemId][size]){
          cartData[itemId][size] += 1;
        }
        else {
          cartData[itemId][size] = 1;
          }
      }
      else {
        cartData[itemId] = {};
        cartData[itemId][size] = 1;
        }
        setCartItems(cartData);
    }
    const getCartCount = () => {
      let totalcount = 0;
      for(const items in cartItems){
        for(const item in cartItems[items]){
          try{
        if(cartItems[items][item]> 0){
          totalcount += cartItems[items][item];
        }
      } catch(error){

      }
    }
  }
    
      return totalcount;
    }
    const updateQuantity = async(itemId, size, quantity) => {
      let cartData = structuredClone(cartItems);
      cartData[itemId][size] = quantity;
      setCartItems(cartData);
    }
    const getCartAmount = async => {
      let totalAmount = 0;
      for(const items in cartItems){
        let itemInfo = products.find((products)=> products._id === items)
        for(const item in cartItems[items]){
          try{
        if(cartItems[items][item]> 0){
          totalAmount += cartItems[items][item] * itemInfo.price;
        }
      } catch(error){
      
      }
  }
}
return totalAmount;
    }
    // useEffect(()=>{
    //   console.log(cartItems);
      
    //   //const cartData = localStorage.getItem('cart');
    // },[cartItems])
    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount,
        navigate
  
    }

  return (
  <ShopContext.Provider value={value}>
    {props.children}
  </ShopContext.Provider>
  )
}

export default ShopContextProvider