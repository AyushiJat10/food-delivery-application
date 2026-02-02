import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'

const PlaceOrder = () => {
  const {totalCartAmount} = useContext(StoreContext);
  return (
    <form  className="place-order">
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input type="text"  placeholder='First name'/>
          <input type="text" placeholder='Last name'/>
        </div>
        <input type="email" placeholder='Email address'/>
        <input type="text" placeholder='Street'/>
        <div className="multi-fields">
          <input type="text"  placeholder='City'/>
          <input type="text" placeholder='State'/>
        </div>
        <div className="multi-fields">
          <input type="text"  placeholder='Zip code'/>
          <input type="text" placeholder='Country'/>
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right">
<div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${totalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${totalCartAmount()===0?0:12}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>${totalCartAmount()===0?0:totalCartAmount()+12}</p>
            </div>
            <button >Proceed to PAYMENT</button>
          </div>
          </div>
      </div>
    </form>
  )
}

export default PlaceOrder