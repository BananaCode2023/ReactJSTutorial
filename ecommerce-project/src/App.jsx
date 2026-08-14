import { useEffect, useState } from 'react'
import axios from 'axios'
import { Routes, Route, useParams } from 'react-router'
import './App.css'
import { HomePage } from './pages/home/HomePage'
import { CheckoutPage } from './pages/Checkout/CheckoutPage'
import { OrdersPage } from './pages/orders/OrdersPage'
import { TrackingPage } from './pages/TrackingPage'
import { ErrorPage } from './pages/ErrorPage'

function App() {
  
  const [cart, setCart] = useState([]);

  let loadCart = async () => {
    const response = await axios.get('/api/cart-items?expand=product')
    setCart(response.data)
  }

  useEffect( () => {
    loadCart()
  }, [])

  return (
    <>
      <Routes>
        <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
        <Route path="checkout" element={<CheckoutPage cart={cart} loadCart={loadCart} />} />
        <Route path="orders" element={<OrdersPage cart={cart}/>} />
        <Route path="tracking/:orderId/:productId" element={<TrackingPage cart={cart} />} />
        <Route path="*" element={<ErrorPage cart={cart}/>} />
      </Routes>
    </>
  )
}

export default App
