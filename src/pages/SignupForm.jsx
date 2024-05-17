import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Button from "../components/Button";
import pattern from '../assets/pattern.png';

const SignupForm = () => {
    const navigate = useNavigate(); 
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [error, setError] = useState(null); 

    const handleSubmit = (e) => {
        e.preventDefault(); 

        // validate all fields
        if (!name || !email || !password || !confirmPass) {
            setError("All fields are required");
            return;
        }

        // validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Invalid email address");
            return;
        }

        // validate password requirements
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(password)) {
            setError("Password must contain at least 8 characters, one uppercase letter, one number, one special character, and not include '@'");
            return;
        }

        // if password matches confirm password
        if (password !== confirmPass) {
            setError("Passwords do not match");
            return;
        }

        // if all validations pass
        navigate('/home');
    };

    return (
        <div className="max-w-md mx-auto flex flex-col space-y-4">
            {/* <img src={pattern} className="px-8 items-center"/>
             */}
            <h1 className="text-3xl text-center font-semibold p-8">
                WELCOME
            </h1>

            <form onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-4 shadow-lg p-8">
                    <input
                        className="rounded-md focus:outline-none border border-secondary px-4 py-2"
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input
                        className="rounded-md focus:outline-none border border-secondary px-4 py-2"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        className="rounded-md focus:outline-none border border-secondary px-4 py-2"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <input
                        className="rounded-md focus:outline-none border border-secondary px-4 py-2"
                        type="password"
                        placeholder="Confirm password"
                        value={confirmPass}
                        onChange={(e) => setConfirmPass(e.target.value)}
                    />

                    {error && <p className="text-red text-sm">{error}</p>}
                    
                    <Button type="submit">Sign up</Button>
                </div>
            </form>

            <p className="text-center text-sm text-sub">
                <a className="" href="/login">
                    Already have an account? <span className="font-bold text-main">Sign in</span>
                </a>
            </p>
        </div>
    );
};

export default SignupForm;
