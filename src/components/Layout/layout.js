import * as React from 'react';
import PropTypes from 'prop-types';
// import { StaticQuery, graphql } from 'gatsby';
import Header from './Header/Header';
import Footer from './Footer/Footer';

import { contactsData } from '../../db/contactsData';
import { footerData } from '../../db/footerData';

const Layout = ({ children }) => {

  return (
      <div className="app-container">
          <Header />
          <main>{children}</main>
          <Footer dataContacts={contactsData} dataFooter={footerData} />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
