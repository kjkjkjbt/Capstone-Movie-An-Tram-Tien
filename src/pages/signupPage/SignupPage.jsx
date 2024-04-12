
// import React from 'react'
// import { NavLink } from 'react-router-dom'

// const SignupPage = () => {
//   return (
//     <div className="bg-grey-lighter min-h-screen flex flex-col">
//         <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
//         <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
//             <h1 className="mb-8 text-3xl text-center">Sign up</h1>
//                 <input type="text" className="block border border-grey-light w-full p-3 rounded mb-4" name="fullname" placeholder="Full Name" />
//                 <input type="text" className="block border border-grey-light w-full p-3 rounded mb-4" name="email" placeholder="Email" />
//                 <input type="password" className="block border border-grey-light w-full p-3 rounded mb-4" name="password" placeholder="Password" />
//                 <input type="password" className="block border border-grey-light w-full p-3 rounded mb-4" name="confirm_password" placeholder="Confirm Password" />
//                 <button type="submit" className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1">Create Account</button>
//                 <div className="text-center text-sm text-grey-dark mt-4">
//         By signing up, you agree to the 
//                 <NavLink className="no-underline border-b border-grey-dark text-grey-dark" to ="#">
//           Terms of Service
//                 </NavLink> and 
//                 <NavLink className="no-underline border-b border-grey-dark text-grey-dark" to ="#">
//           Privacy Policy
//                 </NavLink>
//             </div>
//         </div>
//         <div className="text-grey-dark mt-6">
//       Already have an account? 
//             <NavLink className="no-underline border-b border-blue text-blue" to ="">
//         Log in
//             </NavLink>.
//         </div>
//     </div>
// </div>
//   )
// }

// export default SignupPage

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
      taiKhoan: '',
      matKhau: '',
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
          <p className="text-red-200 h-3">{formSignup.errors.hoTen}</p>
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
            Tel.
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

