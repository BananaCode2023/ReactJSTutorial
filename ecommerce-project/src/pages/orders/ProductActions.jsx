import { Link } from "react-router";

export function ProductActions({orderProduct, order}) {
    
  return (
    <div className="product-actions">
      <Link to={`/tracking/${order.id}/${orderProduct.product.id}`}>
        <button className="track-package-button button-secondary">
          Track package
        </button>
      </Link>
    </div>
  );
}
