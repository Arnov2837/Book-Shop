import React from 'react';
import Nav from '../Component/Sheard/NavBar/Nav';

import { Outlet } from 'react-router';

const MainLayOut = () => {
  return (
    <div>
      <Nav></Nav>
       <Outlet></Outlet>
      
    </div>
  );
};

export default MainLayOut;