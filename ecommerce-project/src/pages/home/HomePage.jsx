
import './HomePage.css'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import HomeFavicon from '../../assets/images/home-favicon.png'
import { ProductsGrid } from './ProductsGrid';

export function HomePage({cart, loadCart}) {
    
    const [products, setProducts] = useState([]);
    

    useEffect( () => {
        const getHomeData = async () => {
            const response = await axios.get('/api/products')
    
            setProducts(response.data)
        }

        getHomeData();
    },[])

    return (
        <>

            <title>Homepage</title>
            <link rel="icon" type="image/svg+xml" href={HomeFavicon} />
            <Header cart={cart} />

            <div className="home-page">
                <ProductsGrid products={products} loadCart={loadCart}/>
            </div>
        </>
    );
}