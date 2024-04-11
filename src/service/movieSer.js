import { MA_NHOM, http } from './urlConfig';

export const movieSer = {
  getBannerMovie: () => {
    let uri = '/api/QuanLyPhim/LayDanhSachBanner';
    return http.get(uri);
  },
  getListMovies: () => {
    let uri = `/api/QuanLyPhim/LayDanhSachPhim?maNhom=${MA_NHOM}`;
    return http.get(uri);
  },
  getDetailMovie: (idMovie) => {
    let uri = `/api/QuanLyPhim/LayThongTinPhim?MaPhim=${idMovie}`;
    return http.get(uri);
  },
  getScheduleMovie: (idMovie) => {
    let uri = `/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${idMovie}`;
    return http.get(uri);
  },
  getListGhe :(maLichChieu)=>{
    let uri =`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`;
    return http.get(uri)
  },
  postListGhe :(data)=>{
    let uri =  `/api/QuanLyDatVe/DatVe`;
    return http.post(uri, data);
  },
  getListRap :(maHeThongRap)=>{
    let uri =`/api/QuanLyRap/LayThongTinHeThongRap`;
    return http.get(uri)
  },
};
