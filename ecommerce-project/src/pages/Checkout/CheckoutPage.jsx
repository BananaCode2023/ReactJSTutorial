import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { CheckoutHeader } from './components/CheckoutHeader';
import './CheckoutPage.css'
import CheckoutFavicon from '../../assets/images/cart-favicon.png'
import { OrderSummary } from './OrderSummary';
import { PaymentSummary } from './PaymentSummary';

export function CheckoutPage({cart, loadCart}) {

    let [deliveryOptions, setDeliveryOptions] = useState([])
    const [paymentSummary, setPaymentSummary] = useState(null);
    

    useEffect(() => {
        let fetchCheckoutData = async () => {
            let response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
            setDeliveryOptions(response.data)
        }
        
        fetchCheckoutData();
    }, [cart])

    useEffect(() => {
        let fetchPaymentSummary = async () => {
            let response = await axios.get('/api/payment-summary')
            setPaymentSummary(response.data);
        }

        fetchPaymentSummary();
    },[cart])


    return (
        <>
            <link rel="icon" type="image/svg+xml" href={CheckoutFavicon} />

            <CheckoutHeader cart={cart}/>

            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <OrderSummary cart={cart} deliveryOptions={deliveryOptions} loadCart={loadCart}/>

                    <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart}/>
                </div>
            </div>
        </>
    );
}