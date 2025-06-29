import { LOGO_URL } from '../../assets/constant';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UserOutlined, HomeOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import UserActions from './UserActions';

const Header = () => {
    // Get auth state from Redux
    const { isAuthenticated, user } = useSelector((store) => store.user);
    const cartItems = useSelector((store) => store.cart.items);

    return (
      <div className="header flex justify-between border-double border-b-2 border-grey shadow-md">
        <div className="logo-container">
          <img className="logo size-24" src={LOGO_URL} alt="Logo"/>
        </div>
        <div className="content-center pr-6">
          <ul className='flex gap-8 items-center'>
            <li className='hover:text-ant-green-500 flex items-center gap-2 hover:bg-slate-100 rounded-lg hover:outline py-1 px-2'>
              <HomeOutlined />
              <Link to="/">Home</Link>
            </li>
            <li className='hover:text-ant-green-500 flex items-center gap-2 hover:bg-slate-100 rounded-lg hover:outline py-1 px-2'>
              <ShoppingCartOutlined />
              <Link to="/cart">Cart ({cartItems.length})</Link>
            </li>
            {isAuthenticated && user && (
              <li className='p-1 flex gap-2 align-items-start'>
                <UserActions user={user}/>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
};

export default Header;