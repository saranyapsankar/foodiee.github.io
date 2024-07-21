import { LOGO_URL } from '../assets/constant';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import setOnlineStatus from '../assets/setOnlineStatus';
import UserContext from '../assets/UserContext';
import { useSelector } from 'react-redux';
const Header = () => {
    const [btnLabel, setbtnLabel] = useState('Login');
    const onlineStatus = setOnlineStatus()
    const { loggedInUser } = useContext(UserContext);
    //subscribing to read store
    const cartItems = useSelector((store)=> store.cart.items);
    return (
      <div className="header flex justify-between border-double border-b-2 border-grey shadow-md">
        <div className="logo-container">
          <img className="logo size-24" src={ LOGO_URL }/>
        </div>
        <div className="nav-items">
          <ul className='flex gap-8'>
            <li>{onlineStatus ? '🟢' : '🔴' }</li>
            <li className='hover:text-green-500'><Link to="">Home</Link></li>
            <li className='hover:text-green-500'><Link to="./about">About</Link></li>
            <li className='hover:text-green-500'><Link to="./cart">Cart ({cartItems.length})</Link></li>
            <button className="bg-green-500 border-solid border-2 rounded-sm text-white border-green-500 px-1 hover:scale-105" onClick={()=>{
                testVar = 'nopeee';
                if(btnLabel === 'Login' ? setbtnLabel('Logout') : setbtnLabel('Login'));
            }}>{btnLabel}</button>
            <li className='font-semibold bg-green-500 max-h-7 
            px-3 border-2 border-green-700 rounded-sm text-ellipsis overflow-hidden max-w-52 mr-1'>{loggedInUser}</li>
          </ul>
        </div>
      </div>
    )
  }
  export default Header;