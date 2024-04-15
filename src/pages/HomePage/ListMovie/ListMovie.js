import React, { useEffect, useState } from 'react';
import { movieSer } from '../../../service/movieSer';
import { useNavigate } from 'react-router-dom';

const ListMovie = () => {
  const [dataMovieList, setDataMovieList] = useState();
  const navigate = useNavigate();
  const fetchListMovies = async () => {
    try {
      const data = await movieSer.getListMovies();
      let movieList = data.data.content;
      setDataMovieList(movieList);
    } catch (error) {
      console.log('error: ', error);
    }
  };
  useEffect(() => {
    // call api
    fetchListMovies();
  }, []);
  const navigatePageDetail = (id) => {
    navigate(`detail-movie/${id}`);
  };
  const renderListMovies = () => {
    // optional chaining operator

    return dataMovieList?.map((movie) => {
      return (
        <div
          onClick={() => {
            navigatePageDetail(movie.maPhim);
          }}
          key={movie.maPhim}
          className="border rounded m-2 p-10 text-white  transition-all duration-500 bg-gradient-to-br to-white via-black from-red-500 bg-size-200 hover:bg-right-bottom"
        >
          <div className="h-96">
            <img
              src={movie.hinhAnh}
              className="w-full h-full object-cover rounded hover:bg-red-250"
              alt=""
            />
          </div>
          <div className="p-3 space-y-2 hover:text-wrap ">
            <p className="font-medium">{movie.tenPhim}</p>
            <p className="text-sm text-red-250">
              {movie.moTa.substring(0, 50)}...
            </p>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="container mx-auto py-5 text-black  rounded bg-white ">
      <h3 className=" font-medium  text-3xl  ">𝔏𝔦𝔰𝔱 𝔐𝔬𝔳𝔦𝔢  </h3>
      {/* Danh sách phim */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-12  ">
        {/* card phim */}
        {renderListMovies()}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default ListMovie;
