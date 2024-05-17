import React from 'react';
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import pattern from '../assets/pattern.png';

const LandingText = () => {
    const navigate = useNavigate();
  return (
    <div className="max-w-md mx-auto flex flex-col text-center space-y-4 p-12">
        {/* <img src={pattern} className="px-8"/> */}
        
        <p className="text-xs font-bold text-accent">VIVID MINIMAL PICKS</p>
        <h1 className="text-5xl font-extrabold">
        CHROMA HOME DECO
        </h1>
        <p className="text-sub p-2">
        A prime location to uncover exquisite furniture and elevate the aesthetic appeal of your home.
        </p>
        <Button className="mt-4" onClick={() => {navigate("/login")}}>Get Started</Button>
    </div>
  )
}

export default LandingText