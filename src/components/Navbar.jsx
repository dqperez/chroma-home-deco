import React from 'react';
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom";
import MobileNav from "../components/MobileNav";
import { useAppContext } from '../data/AppProvider';

const Navbar = () => {
    const navigate = useNavigate();
    const { cartItems } = useAppContext();
    let totalItems = cartItems.length;
    console.log("totalItems:", totalItems);
  return (
    <div className="p-8 fixed justify-center items-center w-screen bg-white">
        
        <div className="lg:hidden">
            <MobileNav />
        </div>

        <div className="hidden lg:grid grid-cols-3 bg-white">
            <div className="flex justify-center">
                <Logo/>
            </div>
            
            <div className="flex flex-row space-x-8 text-sm justify-center"> {/* Hide buttons on medium and small screens */}
                <button onClick={() => {navigate("/home")}}>Home</button>
                <button onClick={() => {navigate("/favorite")}}>Favorites</button>
                <button onClick={() => {navigate("#")}}>Notifications</button>
                <button onClick={() => {navigate("#")}}>Account</button>
            </div>

            <div className="flex flex-row justify-center space-x-2">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </button>


                <button onClick={() => {navigate("/cart")}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </button>
                <div className="bg-red text-white text-xs rounded-full w-4 h-4 flex items-center justify-center absolute">{totalItems}</div>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar