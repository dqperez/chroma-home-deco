import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthLayout from './templates/AuthLayout';
import DefaultLayout from './templates/DefaultLayout';
import Layout from './templates/Layout';
import LandingText from './pages/LandingText';
import LoginForm from './pages/LoginForm';
import SignupForm from './pages/SignupForm';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import FavoritePage from './pages/FavoritePage';
import CartPage from './pages/CartPage';
import CongratsPage from './pages/CongratsPage';
import './index.css';

function App() {
  return (
    <div className="font-sans">
      <BrowserRouter> {/* Ensure BrowserRouter is only used once at the top level */}
        <Routes path="/" element={<Layout />}>
            {/* Nested route for AuthLayout */}
          <Route element={<AuthLayout />}>
            <Route index element={<LandingText />} />
            <Route path="login" element={<LoginForm />} />
            <Route path="signup" element={<SignupForm />} />
          </Route>
            {/* Nested route for DefaultLayout */}
          <Route element={<DefaultLayout />}>
            <Route path="home" element={<HomePage />} />
            <Route path=":product_id" element={<ProductPage />} />
            <Route path="favorite" element={<FavoritePage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="congrats" element={<CongratsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
