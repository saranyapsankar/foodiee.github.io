import { useRouteError } from "react-router-dom";
import { Result, Button, Typography } from 'antd';
import { HomeOutlined, ReloadOutlined } from '@ant-design/icons';

const { Text } = Typography;

const Error = () => {
    const errData = useRouteError();
    
    const getErrorStatus = () => {
        if (errData?.status) {
            return errData.status;
        }
        return '404';
    };

    const getErrorTitle = () => {
        switch (getErrorStatus()) {
            case '404':
                return 'Page Not Found';
            case '403':
                return 'Access Forbidden';
            case '500':
                return 'Server Error';
            default:
                return 'Something Went Wrong';
        }
    };

    const getErrorSubtitle = () => {
        switch (getErrorStatus()) {
            case '404':
                return 'Sorry, the page you visited does not exist.';
            case '403':
                return 'Sorry, you are not authorized to access this page.';
            case '500':
                return 'Sorry, something went wrong on our servers.';
            default:
                return errData?.data || 'An unexpected error occurred.';
        }
    };

    return (
        <div className="common-page-container flex items-center justify-center min-h-screen">
            <Result
                status={getErrorStatus()}
                title={getErrorTitle()}
                subTitle={getErrorSubtitle()}
                extra={[
                    <Button 
                        type="primary" 
                        key="home" 
                        icon={<HomeOutlined />}
                        href="/"
                    >
                        Back Home
                    </Button>,
                    <Button 
                        key="reload" 
                        icon={<ReloadOutlined />}
                        onClick={() => window.location.reload()}
                    >
                        Reload Page
                    </Button>
                ]}
            >
                {errData?.status && errData?.data && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                        <Text type="secondary">
                            Error Details: {errData.status} - {errData.data}
                        </Text>
                    </div>
                )}
            </Result>
        </div>
    );
};

export default Error;