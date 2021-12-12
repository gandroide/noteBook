import React, { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { NavBarContainer, NavLinks } from '../styles/Container.styles';

export const NavBar: FC = () => {
  return (
    <NavBarContainer>
      <NavLinks>
        <Link style={{ textDecoration: 'none', color: 'white' }} to="/">
          Home
        </Link>
      </NavLinks>
      <NavLinks>
        <Link style={{ textDecoration: 'none', color: 'white' }} to="info">
          Info
        </Link>
      </NavLinks>
      <Outlet />
    </NavBarContainer>
  );
};
