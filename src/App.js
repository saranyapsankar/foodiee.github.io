import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Cart from "./components/Cart";
import Error from "./components/Error";
import UserContext from "./assets/UserContext";
import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./assets/appStore";
import '../index.css'
const AppLayout = () => {
  const [userInfo, setUserInfo] = useState("");
  useEffect(() => {
    const data = {
      loggedInUser: "Saranya",
    };
    setUserInfo(data?.loggedInUser);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userInfo, setUserInfo }}>
        <div className="app-container">
          <Header></Header>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      </UserContext.Provider>
    </Provider>
  );
};
//dynamic import - to lazy load
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
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurent/:resId",
        element: (
          <Suspense fallback="{<h3>Loading...<h3>}">
            <RestaurentDetails />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
