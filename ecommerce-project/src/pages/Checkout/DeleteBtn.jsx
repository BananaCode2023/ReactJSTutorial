import axios from "axios"

export function DeleteBtn ({cartItem, loadCart}) {

    const deleteCartItem = async() => {
        await axios.delete(`/api/cart-items/${cartItem.productId}`)

        await loadCart()
    }

    return(
        <span className="delete-quantity-link link-primary"  onClick={deleteCartItem}>
            Delete
        </span>
    )
}