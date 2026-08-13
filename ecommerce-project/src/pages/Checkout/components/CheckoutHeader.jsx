import './CheckoutHeader.css'
import { NavLink } from 'react-router';
import checkOutLockIcon from '../../../assets/images/icons/checkout-lock-icon.png'


export function CheckoutHeader ({cart}) {

    let totalQuantity = 0;

    cart.forEach((cartItem) => {
        totalQuantity += cartItem.quantity; 
    })

    return (

        <div className="checkout-header">
            <div className="header-content">
                <div className="checkout-header-left-section">
                    <NavLink to="/">
                        <img className="logo" src="images/logo.png" />
                        <img className="mobile-logo" src="images/mobile-logo.png" />
                    </NavLink>
                </div>

                <div className="checkout-header-middle-section">
                    Checkout (<NavLink className="return-to-home-NavLink"
                        to="/">{totalQuantity} items</NavLink>)
                </div>

                <div className="checkout-header-right-section">
                    <img src={checkOutLockIcon} />
                </div>
            </div>
        </div>
    );
}