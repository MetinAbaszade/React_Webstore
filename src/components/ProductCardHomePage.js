    import React from 'react';
    import './ProductCard.css'
    import { useDispatch } from 'react-redux';
    import { add } from '../stores/cartSlice';
import StarRating from './StarRating';

    function ProductCard({ product }) {
        const dispatch = useDispatch();

        function AddtoCardHandle() {
            dispatch(add(product));
        }

        return (
            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 m-5 bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
                <a href="#">
                    <img class="rounded-t-lg p-8" src={product.image} alt={product.title} />
                </a>
                <div class="px-5 mb-2">
                    <a href="#">
                        <h3 class="text-gray-900 font-sans text-xl  dark:text-white">
                            {product.title}
                        </h3>
                    </a>
                </div>
                
                <div class="flex items-center justify-center mb-4 px-5">
                    <StarRating rating={product.rating.rate} />

                    <span class="bg-blue-100 text-blue-800 text-s font-sans mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{product.rating.rate}</span>
                </div>

                <div class="flex items-center justify-between sm:px-5 lg:px-5 xl:px-12 pb-5">
                    <span class="text-3xl font-sans text-gray-900 dark:text-white me-3">{product.price}$</span>
                    <button onClick={AddtoCardHandle}
                        class="text-white font-sans bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to card</button>
                </div>
            </div>
        );
    }

    export default ProductCard;