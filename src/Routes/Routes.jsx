
import Root from "../Layout/Root";
import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthProvider from "../Provider/AuthProvider";
import Profile from "../Pages/Profile";
import PrivateRoutes from "../Provider/PrivateRoutes";
import Bills from "../Pages/BIlls";
import MyPayBill from "../Pages/MyPayBill";

const router = createBrowserRouter([
  {
    path: "/",
    element: ( <AuthProvider>
      <Root></Root>
    </AuthProvider>),
    children: [
      {
        index: true,
        element:<Home></Home>,
      },
      {
        path : '/bills',
        element :<Bills></Bills>
      },
      {
        path : '/mybill',
        element :(
          <PrivateRoutes>
            <MyPayBill></MyPayBill>
          </PrivateRoutes>
        )
      },
      {
        path : '/profile',
        element : (
          <PrivateRoutes>
            <Profile></Profile>
          </PrivateRoutes>
        )
       
      },
      {
        path : '/login',
        element : <Login></Login>
      },
      {
        path : '/register',
        element : <Register></Register>
      }
      
    ],
  },
]);

export default router;
