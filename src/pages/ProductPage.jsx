import {React, useState} from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import Button from '../components/Button';
import { useAppContext } from '../data/AppProvider';

const ProductPage = () => {
  const { product_id } = useParams();
  const { addToCart, addToFavorites } = useAppContext();
  const [quantity, setQuantity] = useState(1);

  // find the product using product_id
  const product = products.find(product => product.product_id === product_id);

  if (!product) {
    return <div>Error: product not found.</div>;
  }

  const handleAddToCart = () => {
    // add multiple instances of the product to the cart based on quantity
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    console.log("Product added to cart:", product.product_id);
    // reset quantity to 1 after adding to cart
    setQuantity(1);
  };

  const handleAddToFavorites = () => {
    addToFavorites(product);
    console.log("Product added to favorites:", product.product_id);
  };

  return (
    <div className="justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <img src={product.main_image} alt={product.name} style={{ width: '320px', height: '400px' }} className="mb-4 rounded-bl-3xl" />
        
        <div className="flex flex-col justify-center w-80 items-left p-8">

          <h1 className="text-lg lg:text-2xl mb-4">{product.name}</h1> 

          <div className="flex flex-row">
            <p className="text-md lg:text-3xl font-semibold mb-4">${product.price}</p>
            <div className="flex flex-row ml-auto -mt-4 justify-center items-center">
              {/* Minus button */}
              <button className="bg-secondary hover:bg-sub px-2 rounded-lg" onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
              {/* Quantity */}
              <p className="p-2">{quantity}</p>
              {/* Plus button */}
              <button className="bg-secondary hover:bg-sub px-2 rounded-lg" onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>  
            
          <p className="mb-4">
            <div className="flex flex-row">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
              </svg>
              <span className="text-sm lg: text-md font-semibold">{product.rating}&nbsp;</span>
              <span className="text-sub text-sm lg: text-md font-regular">({product.review_count} reviews)</span>
            </div>
          </p>
          <p className="text-sm text-sub mb-4">{product.description}</p>

          <div className="flex flex-row gap-4">
            {/* Add to faves button */}
            <button className="bg-secondary hover:bg-sub p-4 rounded-lg" onClick={handleAddToFavorites}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
              </svg>
            </button>

            <button className="flex flex-grow bg-main text-white rounded-lg justify-center items-center" onClick={() => handleAddToCart(product.product_id)}>Add to cart</button>

          </div>


        </div>
   

      </div>
    </div>
  );
};

export default ProductPage;
