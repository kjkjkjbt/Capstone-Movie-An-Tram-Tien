import React from 'react';
import CarouselMovie from './CarouselMovie/CarouselMovie';
import ListMovie from './ListMovie/ListMovie';
import Footer from './Footer/Footer';

// import ReponsiveTailwinds from '../../components/ReponsiveTailwinds/ReponsiveTailwinds';
const HomePage = () => {
  return (
    <div>
      {/* <ReponsiveTailwinds /> */}
      
      <CarouselMovie />
      <ListMovie />
      <Footer />
    </div>
  );
};

export default HomePage;
