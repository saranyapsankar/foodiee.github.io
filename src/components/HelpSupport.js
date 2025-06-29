import { Card, Descriptions, Typography, Space, Row, Col } from 'antd';
import { EnvironmentOutlined, BankOutlined, HomeOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const HelpSupport = (props) => {
    const { name, location, address } = props?.companyData;
    
    return (
        <div className="info-card">
            <Row gutter={[16, 16]}>
                <Col xs={24} md={12}>
                    <Card 
                        title={
                            <Space>
                                <BankOutlined />
                                <span>Company Information</span>
                            </Space>
                        }
                        className="h-full"
                    >
                        <Descriptions column={1} size="small">
                            <Descriptions.Item label="Company Name">
                                <Text strong>{name}</Text>
                            </Descriptions.Item>
                            <Descriptions.Item label="Location">
                                <Space>
                                    <EnvironmentOutlined />
                                    <Text>{location}</Text>
                                </Space>
                            </Descriptions.Item>
                            <Descriptions.Item label="Address">
                                <Space>
                                    <HomeOutlined />
                                    <Text>{address}</Text>
                                </Space>
                            </Descriptions.Item>
                        </Descriptions>
                    </Card>
                </Col>
                
                <Col xs={24} md={12}>
                    <Card 
                        title="Contact Information"
                        className="h-full"
                    >
                        <Space direction="vertical" className="w-full">
                            <div>
                                <Text strong>Customer Support:</Text>
                                <br />
                                <Text>📞 +91 123-456-7890</Text>
                            </div>
                            <div>
                                <Text strong>Email:</Text>
                                <br />
                                <Text>📧 support@{name.toLowerCase()}.com</Text>
                            </div>
                            <div>
                                <Text strong>Business Hours:</Text>
                                <br />
                                <Text>🕒 Monday - Sunday: 9:00 AM - 10:00 PM</Text>
                            </div>
                        </Space>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default HelpSupport;