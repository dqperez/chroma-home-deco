// AuthLayout.jsx
import React from 'react';
import bgImage from '../assets/landingpic.jpg';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="h-screen flex bg-white items-center justify-center">
        <div className="md:w-1/2 p-8">
        <Outlet />
        </div>
        <div className="hidden md:block md:w-1/2 md:h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}></div>
    </div>
  );
};

export default AuthLayout;
