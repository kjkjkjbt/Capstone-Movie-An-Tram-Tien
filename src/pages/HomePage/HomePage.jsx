import React from 'react';
import CarouselMovie from './CarouselMovie/CarouselMovie';
import ListMovie from './ListMovie/ListMovie';
// import ReponsiveTailwinds from '../../components/ReponsiveTailwinds/ReponsiveTailwinds';
const HomePage = () => {
  return (
    <div>
      {/* <ReponsiveTailwinds /> */}
      
      <CarouselMovie />
      <ListMovie />
    </div>
  );
};

export default HomePage;
