import { useParams } from 'react-router';
import './TrackingPage.css'
import { Header } from '../components/Header';
import { Link } from 'react-router';
import TrackingFavicon from '../assets/images/tracking-favicon.png'
import { useEffect, useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';

export function TrackingPage({cart}) {

    const {orderId, productId} = useParams();
    let [order, setOrder] = useState(null)

    useEffect(() => {
        let fetchTrackingData = async () => {
            const response = await axios.get(`/api/orders/${orderId}?expand=products`)
            setOrder(response.data)
        }
        fetchTrackingData();
    },[orderId])

    if(!order){
        return null;
    }

    const orderProduct = order.products.find((orderProduct) => {
        return orderProduct.productId === productId
    })

    const totalDeliveryTimeMs = orderProduct.estimatedDeliveryTimeMs - order.orderTimeMs

    const timePassedMs = dayjs().valueOf() - order.orderTimeMs;

    
    const deliveryPercent = (timePassedMs/totalDeliveryTimeMs) * 100
    
    
    return (
        <>
            <link rel="icon" type="image/svg+xml" href={TrackingFavicon} />
            <title>Tracking</title>

            <Header cart={cart} />

            <div className="tracking-page">
                <div className="order-tracking">
                    <Link className="back-to-orders-link link-primary" to="/orders">
                        View all orders
                    </Link>

                    <div className="delivery-date">
                        {deliveryPercent >= 100 ? `Delivered: ${dayjs(orderProduct.estimatedDeliveryTimeMs).format('MMM DD YYYY')}` : `Arriving in: ${dayjs(orderProduct.estimatedDeliveryTimeMs).format('dddd, MMM DD YYYY')}`}
                    </div>

                    <div className="product-info">
                        {orderProduct.product.name}
                    </div>

                    <div className="product-info">
                        Quantity: {orderProduct.quantity}
                    </div>

                    <img className="product-image" src={orderProduct.product.image} />

                    <div className="progress-labels-container">
                        <div className={`progress-label ${deliveryPercent < 33 ? 'current-status' : ''}`}>
                            Preparing
                        </div>
                        <div className={`progress-label ${deliveryPercent >= 33 && deliveryPercent < 100 ? 'current-status' : ''}`}>
                            Shipped
                        </div>
                        <div className={`progress-label ${deliveryPercent >= 100 ? 'current-status' : ''}`}>
                            Delivered
                        </div>
                    </div>

                    <div className="progress-bar-container">
                        <div className="progress-bar" style={{width: `${deliveryPercent}%`}}></div>
                    </div>
                </div>
            </div>
        </>
    );
}