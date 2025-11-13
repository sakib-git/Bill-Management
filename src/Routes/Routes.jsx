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

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AuthProvider>
        <Root></Root>
      </AuthProvider>
    ),
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: '/bills',
        element: <Bills></Bills>
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
    path: '*',
    element: <NotFount></NotFount>,
  },
]);

export default router;
