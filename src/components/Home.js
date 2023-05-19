import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../stores/productSlice';
import ProductCard from './ProductCardHomePage';

export default function Home() {
    const dispatch = useDispatch();
    const productState = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleCategoryChange = (event) => { // new function to handle the select change
        dispatch(fetchProducts(event.target.value));
    };

    return (
        <div>
            <select onChange={handleCategoryChange} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2 mt-5 w-2/4 mx-auto'>
                <option value="all">All</option>
                <option value="men's clothing">Men's Clothing</option>
                <option value="women's clothing">Women's Clothing</option>
                <option value="jewelery">Jewelery</option>
                <option value="electronics">Electronics</option>
            </select>
            <div className='flex flex-wrap justify-center'>
                {productState.status === 'loading' && <p>Loading...</p>}
                {productState.status === 'error' && <p>Error fetching products</p>}
                {productState.status === 'idle' && productState.data.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}
