import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router";
import dayjs from "dayjs";
import { formatMoney } from "../../utils/money";
import buyAgainIcon from "../../assets/images/icons/buy-again.png"
import { ProductActions } from "./ProductActions";

export function OrderDetailsGrid({ order }) {
    
  return (
    <div className="order-details-grid">
      {order.products.map((orderProduct) => {
        return (
          <Fragment key={orderProduct.product.id}>
            <div className="product-image-container">
              <img src={orderProduct.product.image} />
            </div>

            <div className="product-details">
              <div className="product-name">{orderProduct.product.name}</div>
              <div className="product-delivery-date">
                Arriving on:{" "}
                {dayjs(orderProduct.estimatedDeliveryTimeMs).format("MMMM D")}
              </div>
              <div className="product-quantity">
                Quantity: {orderProduct.quantity}
              </div>
              <button className="buy-again-button button-primary">
                <img className="buy-again-icon" src={buyAgainIcon} />
                <span className="buy-again-message">Add to Cart</span>
              </button>
            </div>

            <ProductActions orderProduct={orderProduct} order={order} />
          </Fragment>
        );
      })}
    </div>
  );
}
