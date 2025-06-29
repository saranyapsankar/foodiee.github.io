import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from 'antd';
import Header from "./components/Header/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Cart from "./components/Cart";
import Error from "./components/Error";
import Login from "./components/Login";
import Register from "./components/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import ThemeDemo from "./components/ThemeDemo";
import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./assets/appStore";
import '../index.scss'

// Custom green theme configuration
const greenTheme = {
  token: {
    colorPrimary: '#52c41a', // Green primary color
    colorPrimaryHover: '#73d13d', // Lighter green for hover
    colorPrimaryActive: '#389e0d', // Darker green for active state
    colorPrimaryBorder: '#b7eb8f', // Light green border
    colorPrimaryBg: '#f6ffed', // Very light green background
    colorSuccess: '#52c41a', // Success color also green
    colorInfo: '#52c41a', // Info color green
    colorLink: '#52c41a', // Link color green
    colorLinkHover: '#73d13d', // Link hover green
    colorTextLightSolid: '#fff', // Ensures white text on primary buttons
  },
  components: {
    Button: {
      primaryColor: '#52c41a',
      primaryHoverColor: '#73d13d',
      primaryActiveColor: '#389e0d',
      colorPrimaryText: '#fff', // Ensures white text on primary buttons
    },
    Menu: {
      itemSelectedBg: '#f6ffed',
      itemSelectedColor: '#52c41a',
    },
    Dropdown: {
      controlItemBgHover: '#f6ffed',
    },
  },
};

const AppLayout = () => {
  return (
    <div className="app-container">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

const RestaurentDetails = lazy(() =>
  import("./components/res-details/RestaurentDetails")
);

const appRouter = createHashRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <Body />
          </ProtectedRoute>
        ),
      },
      {
        path: "/about",
        element: (
          <ProtectedRoute>
            <About />
          </ProtectedRoute>
        ),
      },
      {
        path: "/contact",
        element: (
          <ProtectedRoute>
            <ContactUs />
          </ProtectedRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
      {
        path: "/theme-demo",
        element: <ThemeDemo />,
      },
      {
        path: "/restaurent/:resId",
        element: (
          <ProtectedRoute>
            <Suspense fallback="{<h3>Loading...<h3>}">
              <RestaurentDetails />
            </Suspense>
          </ProtectedRoute>
        ),
      },
    ],
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={appStore}>
    <ConfigProvider theme={greenTheme}>
      <RouterProvider router={appRouter} />
    </ConfigProvider>
  </Provider>
);
