
import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { PostListGheThunk } from '../../../redux/movieReducer/movieThunk';
const Ticket = () => {
const dispatch = useDispatch();
const navigate = useNavigate();
const formLogin = useFormik({
    initialValues: {
        "maLichChieu": "",
        "danhSachVe": [
          {
            "maGhe": '',
            "giaVe": ''
          }
        ]
    },
    onSubmit: (value) => {
        const navigateCus = () => {
          navigate('/');
        };
        dispatch(PostListGheThunk({ value, navigateCus }));
      },
});
  return (
    <div className=''>
      
        <div className='border-collapse border border-slate-500 w-96 h-3/4 rounded-3xl pl-3  '>
            <h1 className='text-center font-bold text-2xl text-wrap text-rose-400 hover:text-green-300/65 cursor-progress	'> Movie Ticket Booking   </h1>
        <div className='text-centre'>---------------------------------------------------------</div>
        <div className='pl-3 text-green-500  flex-auto h-12'>
            <h3 className=' text-2xl'> Cinema  :</h3> 
        </div>
        <div className='pl-3 text-green-500  flex-auto h-12'>
            <h3 className=' text-2xl'> Address :</h3> 
        </div>
        <div className='pl-3 text-green-500  flex-auto h-12'>
            <h3 className=' text-2xl'> Date & Show time  :</h3>
        </div>
        <div className='pl-3 text-green-500  flex-auto h-12'>
            <h3 className=' text-2xl'> Screen :</h3> 
        </div>
        <div className='pl-3 text-green-500  flex-auto h-12'>
            <h3 className=' text-2xl'> Movie's name  :</h3> 
        </div>
        <div className='pl-3 text-green-500  flex-auto h-12'>
          <h3 className=' text-2xl'> Price :</h3> 
        </div>
    </div>
      
    </div>
  )
}

export default Ticket
