import React from 'react';
import { ResponsiveDT, ResponsiveMb, ResponsiveTl } from '../../HOC/reponsive';
import ResponsiveDesktop from './ResponsiveDesktop';
import ResponsiveTablet from './ResponsiveTablet';
import ResponsiveMobile from './ResponsiveMobile';

const Reponsive = () => {
  return (
    <div>
      {/* desk top */}
      <ResponsiveDT>
        <ResponsiveDesktop />
      </ResponsiveDT>
      {/* tablet */}
      <ResponsiveTl>
        <ResponsiveTablet />
      </ResponsiveTl>
      {/* mobile */}
      <ResponsiveMb>
        <ResponsiveMobile />
      </ResponsiveMb>
    </div>
  );
};

export default Reponsive;
