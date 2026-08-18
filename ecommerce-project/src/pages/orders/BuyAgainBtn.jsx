import axios from "axios";
import { useState } from "react";
import buyAgainIcon from "../../assets/images/icons/buy-again.png"

export function BuyAgainBtn({orderProduct, loadCart}) {

    const [quantity, setQuantity] = useState(1);

    const addToCart = async () => {
        await axios.post("/api/cart-items", {
        productId: orderProduct.product.id,
        quantity
        });

        await loadCart();
    }

  return (
    <button className="buy-again-button button-primary" onClick={addToCart}>
      <img className="buy-again-icon" src={buyAgainIcon} />
      <span className="buy-again-message">Add to Cart</span>
    </button>
  );
}
