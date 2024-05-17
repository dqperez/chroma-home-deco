import React from 'react';
import { useAppContext } from '../data/AppProvider';

const FavoritePage = () => {
    const { favoriteItems, removeFromFavorites, addToCart } = useAppContext();
    
    const handleRemoveFromFavorites = (product_id) => {
        removeFromFavorites(product_id);
    };

    const handleAddToCart = (product) => {
        addToCart(product);
        console.log("Product added to cart:", product);
    };

    const handleAddAllToCart = () => {
        favoriteItems.forEach(item => {
            addToCart(item);
            console.log("Product added to cart:", item);
        });
    };
    
    return (
        <div className="flex flex-col">
            <h1 className="flex font-semibold justify-center p-8">My Favorites</h1>
            {favoriteItems.length === 0 ? (
                <p className="text-center text-sub">No results found</p>
            ) : (
                <div className="flex flex-col lg:flex-row justify-center pb-8">
                    <ul className="space-y-8 px-8">
                        {favoriteItems.map((item, index) => (
                            <li key={index}>
                                <div className="flex flex-row gap-8">
                                    <img src={item.main_image} alt={item.name} style={{ width: '120px', height: '120px' }} className="rounded-lg" />

                                    <div className="flex flex-col">
                                        {item.name && <div className="text-sub">{item.name}</div>}
                                        
                                        {item.price && <div className="font-bold">${item.price}</div>}
                                        <div><br/></div>
                                    </div>

                                    <div className="flex flex-col ml-auto">
                                        {/* Remove from favorites button */}
                                        <button onClick={() => handleRemoveFromFavorites(item.product_id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>
                                        </button>

                                        {/* Add to cart button */}
                                        <button onClick={() => handleAddToCart(item)} className="bg-secondary hover:bg-sub p-2 rounded-lg mt-auto">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex-grow border-b border-secondary py-2"></div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {favoriteItems.length > 0 && (
                <button onClick={handleAddAllToCart} className="bg-main text-white justify-center items-center p-4 rounded-lg">Add all to cart</button>
            )}
        </div>
    );
};

export default FavoritePage;
