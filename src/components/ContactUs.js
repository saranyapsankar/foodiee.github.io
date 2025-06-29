import HelpSupport from './HelpSupport';
import { Card, Typography, Layout } from 'antd';
import { CustomerServiceOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Content } = Layout;

const ContactUs = () => {
  const companyData = {
    name: "EatGo",
    location: 'Bengaluru',
    address: 'No 123/23, Random road, Bangalore, India'
  }
  
  return (
    <Layout className="body common-page-container">
      <Content className="p-6">
        <Card>
          <Title level={2} className="mb-6">
            <CustomerServiceOutlined className="mr-3" />
            Help & Support
          </Title>
          <HelpSupport companyData={companyData}/>
        </Card>
      </Content>
    </Layout>
  );
};

export default ContactUs;
