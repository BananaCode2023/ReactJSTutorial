import { Fragment, useState } from "react";
import dayjs from "dayjs";
import { formatMoney } from "../../utils/money";
import { DeliveryOptions } from "./DeliveryOptions";
import { DeliveryDate } from "./components/DeliveryDate";
import { DeleteBtn } from "./DeleteBtn";
import { QuantityLabel } from "./QuantityLabel";

export function CartItemDetails({ cart, deliveryOptions, loadCart }) {

  

  return (
    <Fragment>
      {deliveryOptions.length > 0 &&
        cart.map((cartItem) => {

          const selectedDeliveryOption = deliveryOptions.find(
            (deliveryOption) => {
              return deliveryOption.id === cartItem.deliveryOptionId;
            },
          );

          return (
            <div key={cartItem.productId} className="cart-item-container">
              <DeliveryDate selectedDeliveryOption={selectedDeliveryOption} />

              <div className="cart-item-details-grid">
                <img className="product-image" src={cartItem.product.image} />

                <div className="cart-item-details">
                  <div className="product-name">{cartItem.product.name}</div>
                  <div className="product-price">
                    {formatMoney(cartItem.product.priceCents)}
                  </div>
                  <div className="product-quantity">
                      <QuantityLabel cartItem={cartItem} loadCart={loadCart}/>
                    
                    
                    <DeleteBtn cartItem={cartItem} loadCart={loadCart}/>
                  </div>
                </div>

                <DeliveryOptions
                  deliveryOptions={deliveryOptions}
                  cartItem={cartItem}
                  loadCart={loadCart}
                />
              </div>
            </div>
          );
        })}
    </Fragment>
  );
}
