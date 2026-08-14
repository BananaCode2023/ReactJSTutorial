import dayjs from "dayjs";
import { formatMoney } from "../../utils/money";
import { DeliveryOptions } from "./DeliveryOptions";
import { CartItemDetails } from "./CartItemDetails";

export function OrderSummary({cart, deliveryOptions, loadCart}) {
  return (
    <div className="order-summary">
      <CartItemDetails cart={cart} deliveryOptions={deliveryOptions} loadCart={loadCart} />
    </div>
  );
}
