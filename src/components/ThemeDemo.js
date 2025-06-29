import React, { useState } from 'react';
import { 
  Button, 
  Card, 
  Form, 
  Input, 
  Select, 
  Checkbox, 
  Radio, 
  Switch, 
  Slider, 
  Progress, 
  Alert, 
  Badge, 
  Tag, 
  Divider,
  Space,
  Typography
} from 'antd';
import { 
  CheckCircleOutlined, 
  InfoCircleOutlined, 
  WarningOutlined,
  UserOutlined,
  MailOutlined,
  LockOutlined
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;
const { Option } = Select;

const ThemeDemo = () => {
  const [form] = Form.useForm();
  const [switchValue, setSwitchValue] = useState(false);

  const onFinish = (values) => {
    console.log('Form values:', values);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <Title level={2} className="text-center mb-8">
          Ant Design Green Theme Demo
        </Title>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Buttons Section */}
          <Card title="Buttons" className="shadow-md">
            <Space direction="vertical" className="w-full">
              <Space wrap>
                <Button type="primary">Primary Button</Button>
                <Button type="default">Default Button</Button>
                <Button type="dashed">Dashed Button</Button>
                <Button type="text">Text Button</Button>
                <Button type="link">Link Button</Button>
              </Space>
              
              <Space wrap>
                <Button type="primary" size="large">Large</Button>
                <Button type="primary" size="middle">Middle</Button>
                <Button type="primary" size="small">Small</Button>
              </Space>

              <Space wrap>
                <Button type="primary" icon={<CheckCircleOutlined />}>
                  With Icon
                </Button>
                <Button type="primary" loading>
                  Loading
                </Button>
                <Button type="primary" disabled>
                  Disabled
                </Button>
              </Space>
            </Space>
          </Card>

          {/* Form Section */}
          <Card title="Form Elements" className="shadow-md">
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: 'Please input your name!' }]}
              >
                <Input prefix={<UserOutlined />} placeholder="Enter your name" />
              </Form.Item>

              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: 'Please input your email!' },
                  { type: 'email', message: 'Please enter a valid email!' }
                ]}
              >
                <Input prefix={<MailOutlined />} placeholder="Enter your email" />
              </Form.Item>

              <Form.Item
                name="password"
                label="Password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password prefix={<LockOutlined />} placeholder="Enter your password" />
              </Form.Item>

              <Form.Item name="category" label="Category">
                <Select placeholder="Select a category">
                  <Option value="food">Food</Option>
                  <Option value="drinks">Drinks</Option>
                  <Option value="desserts">Desserts</Option>
                </Select>
              </Form.Item>

              <Form.Item name="agreement" valuePropName="checked">
                <Checkbox>I agree to the terms and conditions</Checkbox>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" className="w-full">
                  Submit Form
                </Button>
              </Form.Item>
            </Form>
          </Card>

          {/* Alerts and Notifications */}
          <Card title="Alerts & Notifications" className="shadow-md">
            <Space direction="vertical" className="w-full">
              <Alert
                message="Success Alert"
                description="This is a success alert with green theme styling."
                type="success"
                showIcon
              />
              <Alert
                message="Info Alert"
                description="This is an info alert with green theme styling."
                type="info"
                showIcon
              />
              <Alert
                message="Warning Alert"
                description="This is a warning alert."
                type="warning"
                showIcon
              />
              <Alert
                message="Error Alert"
                description="This is an error alert."
                type="error"
                showIcon
              />
            </Space>
          </Card>

          {/* Interactive Elements */}
          <Card title="Interactive Elements" className="shadow-md">
            <Space direction="vertical" className="w-full">
              <div>
                <Paragraph>Switch: {switchValue ? 'ON' : 'OFF'}</Paragraph>
                <Switch checked={switchValue} onChange={setSwitchValue} />
              </div>

              <div>
                <Paragraph>Radio Group:</Paragraph>
                <Radio.Group defaultValue="option1">
                  <Radio value="option1">Option 1</Radio>
                  <Radio value="option2">Option 2</Radio>
                  <Radio value="option3">Option 3</Radio>
                </Radio.Group>
              </div>

              <div>
                <Paragraph>Slider:</Paragraph>
                <Slider defaultValue={30} />
              </div>

              <div>
                <Paragraph>Progress:</Paragraph>
                <Progress percent={75} />
              </div>

              <div>
                <Paragraph>Tags:</Paragraph>
                <Space wrap>
                  <Tag color="green">Green Tag</Tag>
                  <Tag color="blue">Blue Tag</Tag>
                  <Tag color="red">Red Tag</Tag>
                </Space>
              </div>

              <div>
                <Paragraph>Badges:</Paragraph>
                <Space>
                  <Badge count={5}>
                    <Button>Notifications</Button>
                  </Badge>
                  <Badge count={0} showZero>
                    <Button>Messages</Button>
                  </Badge>
                </Space>
              </div>
            </Space>
          </Card>
        </div>

        <Divider />

        <Card title="Theme Information" className="shadow-md">
          <Paragraph>
            This demo showcases the custom green theme applied to Ant Design components. 
            The primary color has been changed from the default blue (#1890ff) to green (#52c41a).
          </Paragraph>
          <Paragraph>
            Key theme changes:
          </Paragraph>
          <ul className="list-disc list-inside space-y-1">
            <li>Primary color: #52c41a (Green)</li>
            <li>Primary hover: #73d13d (Lighter green)</li>
            <li>Primary active: #389e0d (Darker green)</li>
            <li>Success, Info, and Link colors also use green variants</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default ThemeDemo; 