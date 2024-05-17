import React, { useState, useEffect } from 'react';
import { useAppContext } from '../data/AppProvider';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
    const navigate = useNavigate();
    const { cartItems, removeFromCart, clearCart } = useAppContext();
    const [promoCode, setPromoCode] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);
    const [promoCodeValid, setPromoCodeValid] = useState(true); // Track promo code validity
    
    const handleRemoveFromCart = (product_id) => {
        removeFromCart(product_id);
    };

    // Calculate total price whenever cartItems change or promoCode changes
    useEffect(() => {
        const calculateTotalPrice = () => {
            let totalPrice = 0;
            cartItems.forEach(item => {
                totalPrice += item.price;
            });

            //checks the last 2 digits after the word discount in promo code
            if (promoCode.startsWith('DISCOUNT') && promoCode.length === 10) {
                const discountPercentage = parseInt(promoCode.substring(8));
                if (!isNaN(discountPercentage) && discountPercentage > 0 && discountPercentage <= 100) {
                    totalPrice *= (1 - discountPercentage / 100);
                    setPromoCodeValid(true); // Promo code is valid
                } else {
                    setPromoCodeValid(false); // Promo code is invalid
                }
            } else {
                setPromoCodeValid(false); // Promo code is invalid
            }

            setTotalPrice(totalPrice);
        };

        calculateTotalPrice();
    }, [cartItems, promoCode]);

    const handleCheckOut = () => {
        clearCart(); // Clear the cart
        navigate('/congrats'); // Navigate to congrats page
    };

    return (
        <div>
            <h1 className="flex font-semibold justify-center p-8">My cart</h1>
            <div className="flex flex-col lg:flex-row justify-center">
                <ul className="space-y-8 px-8">
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            <div className="flex flex-row gap-8">

                                <img src={item.main_image} alt={item.name} style={{ width: '120px', height: '120px' }} className="rounded-lg" />

                                <div className="flex flex-col">
                                    <div className="flex flex-row">
                                        {item.name && <div className="text-sub">{item.name}</div>}
                                       
                                    </div>
                                    {item.price && <div className="font-bold">${item.price}</div>}
                                    <div><br/></div>
                                    <div className="flex flex-row h-1/4">
                                        {/* Minus button */}
                                        <button className="bg-secondary px-2 rounded-lg">-</button>
                                        {/* Quantity */}
                                        <p className="p-1 px-2">01</p>
                                        {/* Plus button */}
                                        <button className="bg-secondary px-2 rounded-lg">+</button>
                                    </div>
                                </div>

                                {/* Remove from cart button */}
                                <button className="ml-auto" onClick={() => handleRemoveFromCart(item.product_id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </button>

                            </div>
                            <div class="flex-grow border-b border-secondary py-2"></div>
                        </li>
                    ))}
                </ul>
                <div className="flex flex-col w-auto gap-4">
                    <div className="flex flex-col">
                        <input
                            className="rounded-md focus:outline-none border border-secondary px-4 py-2"
                            type="text"
                            placeholder="Enter your promo code"
                            value={promoCode}
                            onChange={(e) => setPromoCode(e.target.value)}
                        />
                        {/* Display promo code validity status only when promo code is not empty */}
                        {promoCode.length > 0 && (
                            <>
                                {!promoCodeValid && <p className="text-red text-xs">Promo code invalid</p>}
                                {promoCodeValid && <p className="text-green text-xs">Promo code applied successfully</p>}
                            </>
                        )}
                    </div>
                    <div className="flex flex-row">
                        <p className="font-bold text-sub">Total:</p>
                        <p className="ml-auto font-bold">${totalPrice.toFixed(2)}</p>
                    </div>
                    <Button onClick={handleCheckOut}>Check out</Button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
