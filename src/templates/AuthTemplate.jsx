import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import iconlogin from '../assets/iconlogin.json';
import Lottie from 'lottie-react';
import { useSelector } from 'react-redux';
const AuthTemplate = () => {
  const { infoUser } = useSelector((state) => state.userReducer);
  console.log('infoUser: ', infoUser);
  const navigate = useNavigate();
  // Nếu infoUser có tồn tại => đã đăng nhập => đá về trang chủ
  useEffect(() => {
    if (infoUser) {
      navigate('/');
    }
  }, []);
  return (
    <div className="flex w-screen h-screen bg-cover bg-center relative" style={{ backgroundImage: `url('/img/myke-simon-atsUqIm3wxo-unsplash.jpg')` }}>
      
      <div className="absolute inset-0 bg-black opacity-70"></div> 
      <div className="w-full flex justify-center items-center z-50">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthTemplate;
