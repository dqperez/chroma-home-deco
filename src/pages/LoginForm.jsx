import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import pattern from '../assets/pattern.png';

const LoginForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loginAttempts, setLoginAttempts] = useState({});
    const [lockedEmail, setLockedEmail] = useState(null);

    const maxLoginAttempts = 3;
    const lockoutDuration = 60000; // 1 minute

    const handleLogin = () => {
        if (lockedEmail) {
            setErrorMessage('Account locked. Please try again later.');
            return;
        }
    
        // if email and password match criteria
        if (password === 'Testpassw0rd1') {
            navigate('/home'); // Redirect to main page upon successful login
        } else {
            const attempts = loginAttempts[email] || 0;
            const updatedAttempts = { ...loginAttempts, [email]: attempts + 1 };
            setLoginAttempts(updatedAttempts);
    
            if (updatedAttempts[email] >= maxLoginAttempts) {
                setErrorMessage('Too many login attempts. Account locked.');
                setLockedEmail(email);
                setTimeout(() => {
                    setErrorMessage('');
                    setLockedEmail(null);
                    delete updatedAttempts[email];
                    setLoginAttempts(updatedAttempts);
                }, lockoutDuration);
            } else {
                setErrorMessage('Invalid email or password.');
            }
        }
    };
    

    return (
        <div className="max-w-md mx-auto flex flex-col space-y-4">
            {/* <img src={pattern} className="px-8 items-center" alt="Pattern" /> */}
            <h1 className="text-3xl text-center font-semibold p-8">Hello! <br />WELCOME BACK</h1>
            <div className="flex flex-col space-y-4 shadow-lg p-8">
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
                {errorMessage && <p className="text-red text-sm">{errorMessage}</p>}
                
                <button className="mt-4 text-accent"><a href="/home">Continue as guest</a></button>
                <Button
                    className="text-center pt-4"
                    onClick={handleLogin}
                    disabled={lockedEmail !== null}
                >
                    {lockedEmail ? 'Account Locked' : 'Log In'}
                </Button>
                <button className="text-center">
                    <a href="/signup">Sign up</a>
                </button>

            </div>
        </div>
    );
};

export default LoginForm;
