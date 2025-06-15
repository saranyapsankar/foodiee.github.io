import { LOGO_URL } from '../assets/constant';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import setOnlineStatus from '../assets/setOnlineStatus';
import { useSelector, useDispatch } from 'react-redux';
import { clearUser } from '../assets/userSlice';

const Header = () => {
    const onlineStatus = setOnlineStatus();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    // Get auth state from Redux
    const { isAuthenticated, user } = useSelector((store) => store.user);
    const cartItems = useSelector((store) => store.cart.items);

    const handleLoginLogout = () => {
        if (isAuthenticated) {
            dispatch(clearUser());
        }
        navigate('/login');
    };

    return (
      <div className="header flex justify-between border-double border-b-2 border-grey shadow-md">
        <div className="logo-container">
          <img className="logo size-24" src={LOGO_URL} alt="Logo"/>
        </div>
        <div className="nav-items">
          <ul className='flex gap-8 items-center'>
            <li>{onlineStatus ? '🟢' : '🔴'}</li>
            <li className='hover:text-green-500'><Link to="/">Home</Link></li>
            <li className='hover:text-green-500'><Link to="/about">About</Link></li>
            <li className='hover:text-green-500'><Link to="/cart">Cart ({cartItems.length})</Link></li>
            <button 
              className="bg-green-500 border-solid border-2 rounded-sm text-white border-green-500 px-1 hover:scale-105" 
              onClick={handleLoginLogout}
            >
              {isAuthenticated ? 'Logout' : 'Login'}
            </button>
            {isAuthenticated && user && (
              <li className='font-semibold bg-green-500 max-h-7 px-3 border-2 border-green-700 rounded-sm text-ellipsis overflow-hidden max-w-52 mr-1'>
                {user.name}
              </li>
            )}
          </ul>
        </div>
      </div>
    );
};

export default Header;