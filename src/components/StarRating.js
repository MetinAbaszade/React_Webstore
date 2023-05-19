import React from 'react'
import './StarRating.css'

export default function StarRating({ rating }) {
    const fullStars = Math.floor(rating);
    const halfStar = (rating - fullStars > 0) ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    const stars = [...Array(fullStars).fill('full'), ...Array(halfStar).fill('half'), ...Array(emptyStars).fill('empty')];

    return (
        <div className="flex">
            {stars.map((star, index) => {
                const starPercentage = (star === 'half') ? ((rating - fullStars) * 100) : (star === 'full') ? 100 : 0;

                return (
                    <div className="star" key={index}>
                        {(star === 'half') && (
                            <div className="star-fg" style={{ width: `${starPercentage}%` }}>
                                <svg className="star-bg w-5 h-5 text-yellow-300" fill="yellow" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                            </div>
                        )}

                        {(star === 'full') && (
                            <svg className="star-bg w-5 h-5 text-yellow-300" fill="yellow" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                        )}

                        {console.log(starPercentage)}

                    </div>
                );
            })}
        </div>
    );
}
