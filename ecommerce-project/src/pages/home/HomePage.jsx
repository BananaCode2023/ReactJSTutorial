
import './HomePage.css'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import HomeFavicon from '../../assets/images/home-favicon.png'
import { ProductsGrid } from './ProductsGrid';
import { Link, useSearchParams } from 'react-router';

export function HomePage({cart, loadCart}) {
    
    const [products, setProducts] = useState([]);
    
    const [searchParams] = useSearchParams();
    const search = searchParams.get('search')

    useEffect( () => {
        const getHomeData = async () => {
            const response = 
            await axios.get( search ? `/api/products?search=${search}` : '/api/products')
    
            setProducts(response.data)
        }
        
        getHomeData()
    },[search])

    

    return (
        <>

            <title>Homepage</title>
            <link rel="icon" type="image/svg+xml" href={HomeFavicon} />
            <Header cart={cart} />

            <div className="home-page">
                {products.length == 0 ? 
                    <div className='no-products'>
                        <h2>No Product/s Found</h2>
                        <Link path='/'>
                            <button className='back-home-button'>
                                Back Home
                            </button>
                        </Link>
                    </div> 
                    : 
                    ''
                }
                <ProductsGrid products={products} loadCart={loadCart}/>
            </div>
        </>
    );
}