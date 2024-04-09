import React, { useEffect } from 'react';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const CheckUser = ({ children }) => {
  const navigate = useNavigate();
  const { infoUser } = useSelector((state) => state.userReducer);

  useEffect(() => {
    if (!infoUser) {
      message.error('Please Sign In to book tickets');
      navigate('/auth/login');
    }
  }, []);
  return <>{children}</>;
};

export default CheckUser;
