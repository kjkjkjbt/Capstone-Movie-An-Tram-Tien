import React, { useEffect, useRef, useState } from 'react';
import { Carousel } from 'antd';
import { movieSer } from '../../../service/movieSer';

const CarouselMovie = () => {
  const [dataBan, setDataBan] = useState([]);
  const carouRef = useRef();
  const fetchBannerMovie = async () => {
    try {
      const dataBanner = await movieSer.getBannerMovie();
      let newDataBanner = dataBanner.data.content;
      setDataBan(newDataBanner);
      console.log('newDataBanner: ', newDataBanner); // [{},{},{}]
    } catch (error) {
      console.log('error: ', error);
    }
  };

  useEffect(() => {
    // Call api
    fetchBannerMovie();
  }, []);

  return (
    <div className="relative ">
      <Carousel ref={carouRef}>
        {/* Map  */}

        {dataBan.map((banner) => {
          return (
            <div key={banner.maBanner} className=" w-full">
              <img
                
                className="w-full h-100 object-cover"
                src={banner.hinhAnh}
                alt=""
              />
            </div>
          );
        })}
      </Carousel>
      {/* <button
        onClick={() => {
          carouRef.current.next();
        }}
        className="bg-white p-2 rounded mx-3 absolute right-3 top-1/3 hover:bg-black text-yellow-100 font-bold z-40"
      >
        Next
      </button>
      <button onClick={() => carouRef.current.prev()}
        className="bg-white p-2 rounded mx-3 absolute left-3 top-1/3  "> prev 
      </button> */}

{/* <!-- Slider controls --> */}
    <button onClick={()=>{
      carouRef.current.prev ()
    }}
    className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
    <svg className="w-5 h-5 text-gray-900 dark:text-white rotate-180" fill="none" viewBox="0 0 6 10">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
    </svg>
    <span className="sr-only">Previous</span>
  </span>
    </button>
    <button onClick={()=>{
      carouRef.current.next()
    }}
     className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
    <svg className="w-8 h-8 text-gray-900 dark:text-white" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
    </svg>
    <span className="sr-only">Next</span>
  </span>
    </button>
    </div>
  );
};

export default CarouselMovie;
