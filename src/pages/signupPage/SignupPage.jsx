


import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import { userSer } from '../../service/userSer';
import { useDispatch } from 'react-redux';
import { signupThunk } from '../../redux/userReducer/userThunk';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { NavLink } from 'react-router-dom';
const SignupPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formSignup = useFormik({
    initialValues: {
      "taiKhoan": '',
      "matKhau": '',
      "email": '',
      "soDt": '',
      "maNhom": 'GP09',
      "hoTen": ''
    
    },

    onSubmit: (value) => {
      const navigateCus = () => {
        navigate('/');
      };
      dispatch(signupThunk({ value, navigateCus }));
    },
    validationSchema: yup.object().shape({
      taiKhoan: yup
        .string()
        .required('Tài khoản không được để trống')
        .min(4, 'Tài khoản ít phải là 3 chữ cái'),
      matKhau: yup
        .string()
        .required('Mật Khẩu không được để trống')
        .min(3, 'Mật khẩu ít phải là 3 chữ cái'),
    }),
  });
  return (
    <div>
      <form
        onSubmit={formSignup.handleSubmit}
        action=""
        className="border p-3 rounded-md space-y-3"
      >
        <h3 className="text-2xl font-medium"> Sign up  </h3>
        {/* tên  */}
        <div>
          <label className="text-sm font-medium" htmlFor="">
            Full Name :
          </label>
          <input
            type="text"
            name="hoTen"
            id="hoTen"
            className="border rounded p-2 w-full"
            onChange={formSignup.handleChange}
          />
          <p className="text-red-500 h-3">{formSignup.errors.hoTen}</p>
        </div>
        {/* mật khẩu  */}
        <div>
          <label className="text-sm font-medium" htmlFor="">
            Password 
          </label>
          <input
            className="border rounded p-2 w-full"
            type="text"
            name="matKhau"
            id="matKhau"
            onChange={formSignup.handleChange}
          />
          <p className="text-red-500  h-3">{formSignup.errors.matKhau}</p>
        </div>
        {/* email  */}
        <div>
          <label className="text-sm font-medium" htmlFor="">
            Email 
          </label>
          <input
            className="border rounded p-2 w-full"
            type="text"
            name="email"
            id="email"
            onChange={formSignup.handleChange}
          />
          <p className="text-red-500  h-3">{formSignup.errors.email}</p>
        </div>
        {/* số điện thoại */}
        <div>
          <label className="text-sm font-medium" htmlFor="">
            Tel. Number
          </label>
          <input
            className="border rounded p-2 w-full"
            type="number"
            name="soDt"
            id="soDt"
            onChange={formSignup.handleChange}
          />
          <p className="text-red-500  h-3">{formSignup.errors.soDt}</p>
        </div>
         {/* tên Đăng kí */}
        <div>
          <label className="text-sm font-medium" htmlFor="">
            tên đăng nhập
          </label>
          <input
            className="border rounded p-2 w-full"
            type="string"
            name="taiKhoan"
            id="taiKhoan"
            onChange={formSignup.handleChange}
          />
          <p className="text-red-500  h-3">{formSignup.errors.taiKhoan}</p>
        </div>
        {/* nút đăng ký */}
        <button className="bg-blue-500 text-white rounded p-2 ">
          Create Account 
        </button>

        {/* điều khoản  */}
       <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the 
          <NavLink className="no-underline border-b border-grey-dark text-grey-dark" to ="#">
            Terms of Service
          </NavLink> and 
          <NavLink NavLink className="no-underline border-b border-grey-dark text-grey-dark" to ="#">
            Privacy Policy
          </NavLink>
      </div>

      </form>
    </div>
  );
};

export default SignupPage;

