import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';
import Logo from '../../../svg/logo.svg';
import HeaderLanguage from './HeaderLanguage/HeaderLanguage';
import HeaderContacts from './HeaderContacts/HeaderContacts';
import Burger from './Burger/Burger';
import HeaderOrder from './HeaderOrder/HeaderOrder';

const Header = () => {

  return (
    <div className="page-wrapper">
      <header className="header">
        <div className="header__container">
          <div className="header__logo">
            <Link to="/" className="header-logo__link header-logo__link-xl">
              <Logo className="header-logo" />
            </Link>
          </div>
          <div className="nav">
            <div className="nav__left">
              <HeaderLanguage />
              <HeaderContacts />
            </div>
            <div className="nav__right">
              <HeaderOrder />
              <Burger />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
