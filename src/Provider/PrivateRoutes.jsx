import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';

const PrivateRoutes = ({children}) => {

  const {user, loading} = useContext(AuthContext)

  if (loading) {
  return <div className="text-center mt-20 text-xl">Loading...</div>;
}
  if(!user) {
    return <Navigate to='/login' />
  }
  return children
};

export default PrivateRoutes;