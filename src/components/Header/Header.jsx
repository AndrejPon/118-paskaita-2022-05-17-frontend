import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Header.style';
import Navigation from '../Navigation/Navigation';
import Logo from '../../assets/images/logo.png';

const links = [
  { title: 'Login', link: '/login' },
  { title: 'Register', link: '/register' },
  { title: 'My list', link: '/' },
  { title: 'Add', link: '/add' },
];

const Header = ({ children }) => {
  return (
    <S.Header>
      <S.Image src={Logo} alt='Logo' />
      {children}
      <Navigation links={links} />
    </S.Header>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
