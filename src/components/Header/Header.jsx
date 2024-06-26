import React from 'react';
import { useSelector } from 'react-redux';
import UserNavLogOut from './UserNavLogOut';
import UserNavogin from './UserNavogin';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const { infoUser } = useSelector((state) => state.userReducer);
  const renderUserNav = () => {
    if (infoUser) {
      return <UserNavogin />;
    } else {
      return <UserNavLogOut />;
    }
  };
  return (
    <div className="bg-black py-3 sticky top-0 z-40">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink
          to={'/'}
          className="text-white font-medium text-2xl hover:text-yellow-300"
        >
          𝓗𝓸𝓶𝓮  
        </NavLink>
        <div className="text-white">{renderUserNav()}</div>
      </div>
    </div>
  );
};

export default Header;
