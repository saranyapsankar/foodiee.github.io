import { useSelector, useDispatch } from "react-redux";
import "../assets/resto.scss";
import { clearCart, removeItem, addItem } from "../assets/cartSlice";
import { Card, Button, Typography, List, Space, Empty, Divider, Row, Col } from 'antd';
import { DeleteOutlined, MinusOutlined, PlusOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const Cart = () => {
   //subscribing to read store
   const cartItems = useSelector((store)=> store.cart.items);

   const dispatch = useDispatch();
   const handleClearCart = ()=>{
     //dispatch action
     dispatch(clearCart())
   }
   const handleClearItem = (item)=>{
    //dispatch action
    dispatch(removeItem(item))
  }
  const handleAddItem = (item)=>{
    //dispatch action
    dispatch(addItem(item))
  }

  const calculateTotal = () => {
    return cartItems.reduce((total, menuSec) => {
      const price = menuSec?.card?.info?.price || menuSec?.card?.info?.defaultPrice;
      return total + (price / 100 * (menuSec.count || 1));
    }, 0);
  };

  const total = calculateTotal();

  if (cartItems?.length === 0) {
    return (
      <div className="body common-page-container w-9/12 mx-auto mt-5">
        <Card>
          <Empty
            image={<ShoppingCartOutlined style={{ fontSize: 64, color: '#d9d9d9' }} />}
            description="No items in cart"
          >
            <Button type="primary" href="/">
              Start Shopping
            </Button>
          </Empty>
        </Card>
      </div>
    );
  }

  return (
    <div className="body common-page-container w-9/12 mx-auto mt-5">
      <Card>
        <Row justify="space-between" align="middle" className="mb-6">
          <Title level={2} className="mb-0">
            <ShoppingCartOutlined className="mr-2" />
            Cart ({cartItems.length})
          </Title>
          <Button 
            danger 
            icon={<DeleteOutlined />}
            onClick={handleClearCart}
          >
            Clear Cart
          </Button>
        </Row>
        
        <List
          dataSource={cartItems}
          renderItem={(menuSec) => {
            const price = menuSec?.card?.info?.price || menuSec?.card?.info?.defaultPrice;
            const itemTotal = price / 100 * (menuSec.count || 1);
            
            return (
              <List.Item>
                <Card className="w-full">
                  <Row justify="space-between" align="middle">
                    <Col xs={24} md={12}>
                      <Title level={5} className="mb-2">
                        {menuSec?.card?.info?.name}
                      </Title>
                      <Text type="secondary">
                        {menuSec?.card?.info?.description || 'No description available'}
                      </Text>
                    </Col>
                    
                    <Col xs={24} md={8}>
                      <Space>
                        <Button.Group>
                          <Button 
                            icon={<MinusOutlined />}
                            onClick={() => handleClearItem(menuSec?.card?.info?.id)}
                            disabled={menuSec.count <= 1}
                          />
                          <Button disabled>{menuSec.count || 1}</Button>
                          <Button 
                            icon={<PlusOutlined />}
                            onClick={() => handleAddItem(menuSec)}
                          />
                        </Button.Group>
                      </Space>
                    </Col>
                    
                    <Col xs={24} md={4} className="text-right">
                      <Title level={4} className="mb-0 text-ant-green-600">
                        ${itemTotal.toFixed(2)}
                      </Title>
                      <Text type="secondary">
                        ${(price / 100).toFixed(2)} each
                      </Text>
                    </Col>
                  </Row>
                </Card>
              </List.Item>
            );
          }}
        />
        
        <Divider />
        
        <Card className="bg-ant-green-50">
          <Row justify="space-between" align="middle">
            <Col>
              <Title level={3} className="mb-0">
                Total Amount
              </Title>
              <Text type="secondary">
                {cartItems.length} item{cartItems.length !== 1 ? 's' : ''}
              </Text>
            </Col>
            <Col>
              <Title level={2} className="mb-0 text-ant-green-600">
                ${total.toFixed(2)}
              </Title>
            </Col>
          </Row>
        </Card>
        
        <div className="mt-6 text-center">
          <Space size="large">
            <Button size="large" href="/">
              Continue Shopping
            </Button>
            <Button type="primary" size="large">
              Proceed to Checkout
            </Button>
          </Space>
        </div>
      </Card>
    </div>
  );
};

export default Cart;
