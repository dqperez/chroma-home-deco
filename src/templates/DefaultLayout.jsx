import React, { useState } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import Navbar from '../components/Navbar';
import FooterNav from '../components/FooterNav';
import { AppProvider } from '../data/AppProvider';

const DefaultLayout = () => {
    const [cartItems, setCartItems] = useState([]);

return (
    <AppProvider>
    <div className="flex flex-col min-h-screen w-screen">
      {/* Navbar */}
      <Navbar cartItems={cartItems} />
      
      
      {/* Content */}
      <div className="flex-1 flex justify-center py-32">
       <Outlet />
      </div>

      {/* Footer Navigation */}
      <FooterNav />
    </div>
    </AppProvider>
  );
};

export default DefaultLayout;
