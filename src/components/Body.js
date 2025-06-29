import RestaurentCard, {extendedRestoCard} from "./RestaurentCard";
import { useState, useContext } from "react";
import Shimmer from "./Shimmer";
import Cuisines from "./Cuisines";
import { Link } from "react-router-dom";
import setAllRestList from "../assets/setAllRestList";
import UserContext from "../assets/UserContext";
import { Input, Button, Card, Typography, Layout, Row, Col, Space, Divider } from 'antd';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { Content } = Layout;

const Body = () => {
  //react state variable
  const [searchText, setSearchText] = useState("");
  const RestoCardWithPromoLabel = extendedRestoCard(RestaurentCard);
  const { loggedInUser , setUserInfo} = useContext(UserContext)

  const {deliverableResList, restaurantsList, filteredDelResList, cuisinesList, setFilteredDelResList} = setAllRestList();

  const handleSearch = () => {
    const filteredrestList = deliverableResList?.filter((item) =>
      item.info.name?.toLowerCase()?.includes(searchText?.toLowerCase())
    );
    setFilteredDelResList(filteredrestList);
  };

  return deliverableResList?.length === 0 ? (
    <Shimmer />
  ) : (
    <Layout className="body main-content">
      <Content className="p-6">
        <Card className="mb-6">
          <Row gutter={16} align="middle" justify="space-between">
            <Col xs={24} md={12}>
              <Space.Compact style={{ width: '100%' }}>
                <Input
                  size="large"
                  placeholder="Search restaurants..."
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  onPressEnter={handleSearch}
                  prefix={<SearchOutlined />}
                />
                <Button 
                  type="primary" 
                  size="large"
                  onClick={handleSearch}
                  icon={<SearchOutlined />}
                >
                  Search
                </Button>
              </Space.Compact>
            </Col>
          </Row>
        </Card>
        
        <Title level={3} className="mb-4">What's on your mind?</Title>
        <div className="cuisines-scroller mb-6">
          {console.log(cuisinesList)}
          {cuisinesList?.map((cuisineItem) => (
            <Cuisines key={cuisineItem?.id} cuisineData={cuisineItem} />
          ))}
        </div>

        <Divider />

        <Title level={3} className="mb-4">Top restaurant chains in Bangalore</Title>
        <div className="res-container scroller mb-6">
          {restaurantsList?.map((restoItem) => (
            <Link className="res-main-link"
            to={"./restaurent/" + restoItem?.info?.id}
            key={restoItem?.info?.id}
          >
            {/* <RestaurentCard key={restoItem?.info?.id} restData={restoItem} /> */}
            {restoItem?.info?.veg ? 
                <RestoCardWithPromoLabel key={restoItem?.info?.id}  restData={restoItem} />:
                <RestaurentCard key={restoItem?.info?.id} restData={restoItem} />}
          </Link>
          ))}
        </div>

        <Divider />

        <Title level={3} className="mb-4">Restaurants with online food delivery in Bangalore</Title>
        <div className="res-container">
          {filteredDelResList?.length === 0 ? (
            <Card>
              <Text type="secondary">No Results found...</Text>
            </Card>
          ) : (
            filteredDelResList?.map((restoItem) => (
              <Link className="res-main-link"
                to={"./restaurent/" + restoItem?.info?.id}
                key={restoItem?.info?.id}
              >
              {restoItem?.info?.veg ? 
                <RestoCardWithPromoLabel restData={restoItem} />:
                <RestaurentCard restData={restoItem} />}
              </Link>
            ))
          )}
        </div>
      </Content>
    </Layout>
  );
};

export default Body;
