import { Link } from "react-router";

export function ProductActions({orderProduct}) {
  return (
    <div className="product-actions">
      <Link to={`/tracking/asd/${orderProduct.product.id}}`}>
        <button className="track-package-button button-secondary">
          Track package
        </button>
      </Link>
    </div>
  );
}
