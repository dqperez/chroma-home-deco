import React from 'react'
import { useNavigate } from 'react-router-dom';

const Logo = () => {
  const navigate = useNavigate();
  return (
    <button onClick={() => {navigate("/")}}>
        <div className="font-inter flex flex-col">
            
            <p className="text-sm font-bold">
            CHROMA
            </p>
            <p className="font-extrabold text-sm text-accent">
            HOME DECO
            </p>
        </div>
    </button>
    
  )
}

export default Logo