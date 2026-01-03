import Root from '../Layout/Root';
import { createBrowserRouter } from 'react-router';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import AuthProvider from '../Provider/AuthProvider';
import Profile from '../Pages/Profile';
import PrivateRoutes from '../Provider/PrivateRoutes';
import Bills from '../Pages/Bills';
import MyPayBill from '../Pages/MyPayBill';
import BillDetails from '../Pages/BillDetails';
import CategoryPage from '../Components/CategoryPage';
import NotFount from '../Components/NotFount';
import { serverApi } from '../Hook/useServerAPI';
import About from '../Pages/About';
import DashboardLayout from '../Layout/DashboardLayout';
import DashboardHome from '../Dashboard/DashboardHome';
import DashboardProfile from '../Dashboard/DashboardProfile';
import DashboarPaybill from '../Dashboard/DashboarPaybill';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: '/bills',
        element: <Bills></Bills>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/mybill',
        element: (
          <PrivateRoutes>
            <MyPayBill></MyPayBill>
          </PrivateRoutes>
        ),
      },
      {
        path: '/profile',
        element: (
          <PrivateRoutes>
            <Profile></Profile>
          </PrivateRoutes>
        ),
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/details/:id',
        element: (
          <PrivateRoutes>
            <BillDetails></BillDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) => fetch(`${serverApi}/bills-details/${params.id}`),
      },
      {
        path: '/category/:id',
        element: <CategoryPage></CategoryPage>,
        loader: ({ params }) => fetch(`${serverApi}/bills?category=${params.id}`),
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoutes>
        <DashboardLayout></DashboardLayout>
      </PrivateRoutes>
    ),
    children: [
      {
        index: true,
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: '/dashboard/profile',
        element: <DashboardProfile></DashboardProfile>,
      },
      {
        path: '/dashboard/myPaybill',
        element: <DashboarPaybill></DashboarPaybill>,
      },
    ],
  },

  {
    path: '*',
    element: <NotFount></NotFount>,
  },
]);

export default router;
