import { useState } from "react";
import axios from "axios";

export function QuantityLabel({ cartItem , loadCart}) {


  const [quantity, setQuantity] = useState(cartItem.quantity);
  const [isQuantityUpdated, setIsQuantityUpdated] = useState(false);

  const selectQuantity = (event) => {
    const quantitySelected = Number(event.target.value);
    setQuantity(quantitySelected);
  };

  const updateQuantity = async() => {
    if(quantity == 0 ){
        await axios.delete(`/api/cart-items/${cartItem.productId}`)

        await loadCart()
    }
    await axios.put(`/api/cart-items/${cartItem.product.id}`, {
        quantity: quantity
    });
    await loadCart();
    
    setIsQuantityUpdated(true)

    setTimeout(() => {
        setIsQuantityUpdated(false)
    },2000)

  }

  return (
    <>
      <span className="update-quantity-container">
        Quantity:{" "}
        <input
          className="quantity-label"
          type="number"
          min="1"
          max="99"
          placeholder={cartItem.quantity}
          value={quantity}
          style={{ width: "50px" }}
          onChange={selectQuantity}
          onKeyDown={ (event) => {
            if(event.key === 'Enter') {
                updateQuantity();
            }
            else if (event.key === 'Escape'){
                setQuantity(cartItem.quantity)
            }
          }}
        />
        <span className="updated-quantity" style={{transition: '0.3s', opacity: isQuantityUpdated ? 1: 0}}>
            <img src="/images/checkmark.png" width="14px"/>
            Updated Quantity
        </span>
      </span>
      <span
        className="update-quantity-link link-primary"
        onClick={updateQuantity}
      >
        Update
      </span>
    </>
  );
}
