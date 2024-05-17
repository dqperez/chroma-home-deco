import React from 'react'
import success from '../assets/success.png';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const CongratsPage = () => {
    const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-semibold">SUCCESS!</h1>
        <img src={success} style={{ width: '300px', height: '300px' }} />
        <p className="text-sub p-8">
        Your order will be delivered soon.<br/>
        Thank you for choosing our app!
        </p>
        

        <div className="flex flex-col gap-4">
            <Button>Track your orders</Button>
            <Button onClick={() => {navigate("/home")}}>Back to home</Button>
        </div>
        
    </div>
  )
}

export default CongratsPage