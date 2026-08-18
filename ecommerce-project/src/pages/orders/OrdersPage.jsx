
import './OrdersPage.css'
import { useState, useEffect, Fragment} from 'react';
import axios from 'axios';
import { Header } from '../../components/Header';
import OrdersFavicon from '../../assets/images/orders-favicon.png'
import { OrdersGrid } from './OrdersGrid';


export function OrdersPage( {cart, loadCart} ) {

    let [orders, setOrders] = useState([])
    
    useEffect( () => {
        let getOrders = async () => {
            const response = await axios.get('/api/orders?expand=products')
            setOrders(response.data)
        }
        
        getOrders()
        
    }, [])
    
    return (
        <>
            <link rel="icon" type="image/svg+xml" href={OrdersFavicon} />
            <title>Orders</title>

            <Header cart={cart} />

            <div className="orders-page">
                <div className="page-title">Your Orders</div>

            <OrdersGrid orders={orders} loadCart={loadCart}/>
            </div>
        </>
    )
}