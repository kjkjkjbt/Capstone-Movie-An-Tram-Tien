import React from 'react';
import { useMediaQuery } from 'react-responsive';

export const ResponsiveDT = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: '1024px' });
  return isDesktop ? children : null;
};

export const ResponsiveTl = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: '768px', maxWidth: '1023px' });
  return isTablet ? children : null;
};

export const ResponsiveMb = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: '767px' });
  return isMobile ? children : null;
};
