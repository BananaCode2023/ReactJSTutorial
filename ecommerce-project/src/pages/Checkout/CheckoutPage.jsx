import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { CheckoutHeader } from './components/CheckoutHeader';
import './CheckoutPage.css'
import CheckoutFavicon from '../../assets/images/cart-favicon.png'
import { OrderSummary } from './OrderSummary';
import { PaymentSummary } from './PaymentSummary';

export function CheckoutPage({cart}) {

    let [deliveryOptions, setDeliveryOptions] = useState([])
    const [paymentSummary, setPaymentSummary] = useState(null);

    useEffect(() => {
        axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
            .then((response) => {
                setDeliveryOptions(response.data)
            })
        
        axios.get('/api/payment-summary')
            .then((response) => {
                setPaymentSummary(response.data);
            })
    }, [])


    return (
        <>
            <link rel="icon" type="image/svg+xml" href={CheckoutFavicon} />

            <CheckoutHeader />

            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <OrderSummary cart={cart} deliveryOptions={deliveryOptions}/>

                    <PaymentSummary paymentSummary={paymentSummary}/>
                </div>
            </div>
        </>
    );
}