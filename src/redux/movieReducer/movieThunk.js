import { createAsyncThunk } from '@reduxjs/toolkit';
import { movieSer } from '../../service/movieSer';
import { message } from 'antd';
export const getListGheThunk = createAsyncThunk(
  'movieReducer/movieThunk',
  async (payload, { rejectWithValue }) => {
    try {
      const data = await movieSer.getListGhe(payload);
      console.log('data: ', data);
      return data.data.content;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const PostListGheThunk = createAsyncThunk(
  'movieReducer/movieThunk',
  async (payload, { rejectWithValue }) => {
    try {
      const data = await movieSer.PostListGhe(payload.value);
      
      let pushTiket = data.data.content;
      payload.navigateCus();
      message.success('buy Successfully');
      return pushTiket;
    } catch (error) {
      message.error('fail');
      return rejectWithValue(error);
    }
  },
);
