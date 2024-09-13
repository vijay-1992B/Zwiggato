import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Body from "./components/Body";
import Header from "./components/Header";
import Search from "./components/Search";
import Offers from "./components/Offers";
import Help from "./components/Help";
import SignIn from "./components/SignIn";
// import Cart from "./components/Cart";
import Error from "./components/Error";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ResMenu from "./components/ResMenu";
import { Provider } from "react-redux";
import store from "./utils/store";



const Cart = lazy(() => import("./components/Cart"));

const App = function () {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "search",
        element: <Search />,
      },

      {
        path: "offers",
        element: <Offers />,
      },
      {
        path: "help",
        element: <Help />,
      },
      {
        path: "signIn",
        element: <SignIn />,
      },
      {
        path: "cart",
        element: (
          <Suspense fallback={<h1>Loading..........</h1>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <ResMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
