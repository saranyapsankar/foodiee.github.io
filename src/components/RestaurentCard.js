import { CDN_URL } from '../assets/constant';
import { useContext } from 'react';
import UserContext from '../assets/UserContext';
import { Card, Typography, Tag, Space, Image } from 'antd';
import { ClockCircleOutlined, StarOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const RestaurentCard = (props) => {
    const {name, cloudinaryImageId, avgRating, sla, cuisines, veg} = props?.restData?.info;
    
    return (
      <Card
        hoverable
        className="res-card"
        cover={
          <Image
            alt={name}
            src={CDN_URL + cloudinaryImageId}
            className="res-image size-1/4"
            fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3Ik1RnG4W+FgYxN"
          />
        }
        actions={[
          <Space key="rating">
            <StarOutlined style={{ color: '#faad14' }} />
            <Text strong>{avgRating}</Text>
          </Space>,
          <Space key="delivery">
            <ClockCircleOutlined />
            <Text>{sla.slaString}</Text>
          </Space>
        ]}
      >
        <Card.Meta
          title={
            <Title level={5} className="mb-2" ellipsis={{ rows: 2 }}>
              {name}
            </Title>
          }
          description={
            <Space direction="vertical" className="w-full">
              <div>
                {cuisines.slice(0, 3).map((cuisine, index) => (
                  <Tag key={index} color="green" className="mb-1">
                    {cuisine}
                  </Tag>
                ))}
                {cuisines.length > 3 && (
                  <Tag color="default">+{cuisines.length - 3} more</Tag>
                )}
              </div>
              {veg && (
                <Tag color="success" icon={<span>🌱</span>}>
                  Pure Veg
                </Tag>
              )}
            </Space>
          }
        />
      </Card>
    );
};

//higher order component
export const extendedRestoCard = (RestaurentCard) => {
  const { loggedInUser } = useContext(UserContext);
  return (props) => {
    return (
      <div className='relative'>
        <Tag 
          color="green" 
          className='absolute top-2 left-2 z-10'
          style={{ 
            position: 'absolute',
            top: '8px',
            left: '8px',
            zIndex: 10,
            fontSize: '12px',
            padding: '4px 8px'
          }}
        >
          Promoted by {loggedInUser}
        </Tag>
        <RestaurentCard {...props}/>
      </div>
    );
  };
};

export default RestaurentCard;