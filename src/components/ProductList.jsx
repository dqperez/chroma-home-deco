import React from 'react';
import products from '../data/products'; // Import the product data
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../data/AppProvider';

const ProductList = ({ category }) => {
    const navigate = useNavigate();
    // Use the context hook to access the addToCart function
    const { addToCart } = useAppContext();

  // Filter products based on the category
  let filteredProducts = [...products];

  if (category === "popular") {
    filteredProducts = products.filter(product => product.rating > 4);
  } else if (category === "chair") {
    filteredProducts = products.filter(product => product.type === "chair");
  } else if (category === "table") {
    filteredProducts = products.filter(product => product.type === "table");
  } else if (category === "armchair") {
    filteredProducts = products.filter(product => product.type === "armchair");
  } else if (category === "bed") {
    filteredProducts = products.filter(product => product.type === "bed");
  }

  // Sort filtered products by priority (lower first), then alphabetically by name
  filteredProducts.sort((a, b) => {
    if (a.priority !== b.priority) {
      return a.priority - b.priority; // Sort by priority first
    } else {
      // If priority is the same, sort alphabetically by name
      return a.name.localeCompare(b.name);
    }
  });

  const handleAddToCart = (productId) => {
    const productToAdd = products.find(product => product.product_id === productId);
    addToCart(productToAdd);
    console.log("Product added to cart:", productId);
  };

  return (
    <div className="p-2">
      <ul className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredProducts.map(product => (
          <li key={product.product_id}>
            <div style={{ position: 'relative', display: 'inline-block' }}>
                <img src={product.main_image} alt={product.name} style={{ width: '160px', height: '200px' }} className="rounded-lg" />
                <button onClick={() => handleAddToCart(product.product_id)} style={{ position: 'absolute', bottom: 5, right: 5 }}
                    className="bg-gray hover:bg-sub p-2 rounded-lg">

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                    </svg>

                </button>
            </div>
            <br/>
            <button className="text-left" onClick={() => {navigate(`/${product.product_id}`)}}>
                <div className="text-sub text-sm"><a>{product.name}</a></div>
                <div className="font-bold">${product.price}</div>
            </button>
                     
            {/* <div className="text-xs">Type: {product.type}</div>
            <div className="text-xs">Rating: {product.rating}</div>
            <div className="text-xs">Priority: {product.priority}</div> */}

          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
