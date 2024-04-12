import React, { useEffect, useState } from 'react';
import { movieSer } from '../../../service/movieSer';
import { useNavigate } from 'react-router-dom';
import './ListMovie.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const ListMovie = () => {
  const [dataMovieList, setDataMovieList] = useState();
  const [likes, setLikes] = useState({}); 
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

  const handleLikeClick = (movieId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [movieId]: (prevLikes[movieId] || 0) + 1,
    }));
  };
  
  const renderListMovies = () => {
    // optional chaining operator

    return dataMovieList?.map((movie) => {
      return (
        <div
          key={movie.maPhim}
          className="border rounded"
        >
          <div className="h-96">
            <img
              src={movie.hinhAnh}
              className="w-full h-full object-cover rounded"
              alt=""
            />
          </div>
          <div className="p-3 space-y-2">
            <div className="h-8">
              <p className="font-medium">{movie.tenPhim}</p>
              <p className="text-sm text-gray-400">
                {movie.moTa.substring(0, 50)}...
              </p>
            </div>
            <div className="flex justify-around p-7">
              <div className="bg-blue-500 text-white rounded">
                <button className="button-buy block p-1 leading-8" onClick={() => handleLikeClick(movie.maPhim)}>
                  <span><FontAwesomeIcon icon={faThumbsUp} /> Like {likes[movie.maPhim] || 0}</span>
                </button>
              </div>
              <div className="button-container bg-red-500 text-white p-1 rounded">
                <button onClick={() => navigatePageDetail(movie.maPhim)} className="border font-bold p-1 rounded">MUA VÉ</button>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="container mx-auto py-5 bg-white">
      
      {/* Danh sách phim */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-12 m-0 ">
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
