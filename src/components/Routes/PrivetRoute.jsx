import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, redirect, useLocation, useNavigate } from 'react-router-dom';

const PrivetRoute = ({children}) => {

  const {user} = useContext(AuthContext)
  const location = useLocation()
  const from = location.state?.from?.pathName || '/'
  const navigate = useNavigate()
  if(user){
    return children
  }
  return (
    <Navigate to='/login' state={{from:location}} replace></Navigate>
  );
};

export default PrivetRoute;