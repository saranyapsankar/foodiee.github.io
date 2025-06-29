import { InfoCircleOutlined, ExperimentOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearUser } from '../../assets/userSlice';

export default function UserActions({user}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { name, email } = user;

    const handleLogout = () => {
        dispatch(clearUser());
        navigate('/login');
    };

    const handleNavigation = (path) => {
        navigate(path);
    };

    const renderUserContent = () => {
        return (
            <div className="flex flex-col">
                <span className="text-lg text-black font-semibold">{name}</span>
                <span className="text-sm text-gray-500">{email}</span>
            </div>
        );
    }

    const items = [
        {
            key: 'name',
            label: renderUserContent(),
            icon: <UserOutlined className='bg-ant-green-500 rounded-2xl p-2 text-white'/>,
            disabled: true,
          },
        {
            type: 'divider',
          },
        {
          key: 'about',
          label: 'About',
          icon: <InfoCircleOutlined />,
          onClick: () => handleNavigation('/about'),
        },
        {
          key: 'theme-demo',
          label: 'Theme Demo',
          icon: <ExperimentOutlined />,
          onClick: () => handleNavigation('/theme-demo'),
        },
        {
          key: 'account',
          label: 'My Account',
          icon: <UserOutlined />,
          disabled: true,
        },
        {
          key: 'logout',
          label: 'Logout',
          icon: <LogoutOutlined />,
          onClick: handleLogout,
        }
    ];
    
    return (
        <Dropdown menu={{ items }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            {/* {userName}
            <DownOutlined /> */}
             <UserOutlined className='bg-ant-green-500 text-white rounded-2xl p-2'/> 
                
          </Space>
        </a>
      </Dropdown>
    )
};