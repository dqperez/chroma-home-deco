import React, { useState } from 'react';
import Categories from '../components/Categories'
import ProductList from '../components/ProductList'

const HomePage = () => {
    const [selectedCategory, setSelectedCategory] = useState('');

    // // Function to update cart items when a product is added
    // const handleAddToCart = (productId) => {
    //     setCartItems(prevCartItems => [...prevCartItems, productId]);
    // };

    const handleCategoryChange = (category) => {
      setSelectedCategory(category);
      console.log(chosenCategory);
    };

  return (
    <div>
        <Categories onCategoryChange={handleCategoryChange} />
        <ProductList category={selectedCategory}/>
    </div>
  )
}

export default HomePage