import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import { userSer } from '../../service/userSer';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/userReducer/userThunk';
import { useNavigate, NavLink } from 'react-router-dom';

import './LoginPage.css'
const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formLogin = useFormik({
    initialValues: {
      taiKhoan: '',
      matKhau: '',
    },

    onSubmit: (value) => {
      const navigateCus = () => {
        navigate('/');
      };
      dispatch(loginThunk({ value, navigateCus }));
    },
    validationSchema: yup.object().shape({
      taiKhoan: yup
        .string()
        .required('Tài khoản không được để trống')
        .min(4, 'Tài khoản ít phải là 4 chữ cái'),
      matKhau: yup
        .string()
        .required('Mật Khẩu không được để trống')
        .min(3, 'Mật khẩu ít phải là 3 chữ cái'),
    }),
  });
  return (
    <div>
     

      {/* login */}
     
  <div className="grid">
    <form onSubmit={formLogin.handleSubmit} action=""  className="form login form login relative bg-black bg-opacity-50 backdrop-blur-md p-8 rounded-lg">
      <div>

      <div className="form__field">
        <label htmlFor="taiKhoan "><svg className="icon">
            <use xlinkHref="#icon-user" />
          </svg><span className="hidden">Username</span></label>
        <input autoComplete="taiKhoan" id="taiKhoan" type="text" name="taiKhoan" placeholder="Username" className="form__input" onChange={formLogin.handleChange} required />
      </div>
        <p className="text-red-500 h-3 m-2">{formLogin.errors.taiKhoan}</p>
      </div>
      <div>

      <div className="form__field">
        <label htmlFor="matKhau"><svg className="icon">
            <use xlinkHref="#icon-lock" />
          </svg><span className="hidden">Password</span></label>
        <input id="matKhau" type="password" name="matKhau" className="p-2 form__input" placeholder="Password" required onChange={formLogin.handleChange}/>
      </div>
      <p className="text-red-500  h-3">{formLogin.errors.matKhau}</p>
      </div>
      <div className="form__field">
        <input type="submit" defaultValue="Sign In" />
      </div>
    </form>
    <p className="text--center my-6">Not a member? <NavLink to="/auth/register">Sign up now</NavLink> <svg className="icon">
        <use xlinkHref="#icon-arrow-right" />
      </svg></p>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" className="icons">
    <symbol id="icon-arrow-right" viewBox="0 0 1792 1792">
      <path d="M1600 960q0 54-37 91l-651 651q-39 37-91 37-51 0-90-37l-75-75q-38-38-38-91t38-91l293-293H245q-52 0-84.5-37.5T128 1024V896q0-53 32.5-90.5T245 768h704L656 474q-38-36-38-90t38-90l75-75q38-38 90-38 53 0 91 38l651 651q37 35 37 90z" />
    </symbol>
    <symbol id="icon-lock" viewBox="0 0 1792 1792">
      <path d="M640 768h512V576q0-106-75-181t-181-75-181 75-75 181v192zm832 96v576q0 40-28 68t-68 28H416q-40 0-68-28t-28-68V864q0-40 28-68t68-28h32V576q0-184 132-316t316-132 316 132 132 316v192h32q40 0 68 28t28 68z" />
    </symbol>
    <symbol id="icon-user" viewBox="0 0 1792 1792">
      <path d="M1600 1405q0 120-73 189.5t-194 69.5H459q-121 0-194-69.5T192 1405q0-53 3.5-103.5t14-109T236 1084t43-97.5 62-81 85.5-53.5T538 832q9 0 42 21.5t74.5 48 108 48T896 971t133.5-21.5 108-48 74.5-48 42-21.5q61 0 111.5 20t85.5 53.5 62 81 43 97.5 26.5 108.5 14 109 3.5 103.5zm-320-893q0 159-112.5 271.5T896 896 624.5 783.5 512 512t112.5-271.5T896 128t271.5 112.5T1280 512z" />
    </symbol>
  </svg>



    </div>
  );
};

export default LoginPage;
