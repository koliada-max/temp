import React from 'react';
import PropTypes from 'prop-types';
import FooterTop from './FooterTop/FooterTop';
import FooterMiddle from './FooterMiddle/FooterMiddle';
import FooterBottom from './FooterBottom/FooterBottom';

const Footer = ({ dataContacts, dataFooter }) => {
  return (
    <footer className="footer" id="footer">
      <div className="page-wrapper">
        <FooterTop contactsData={dataContacts} title={dataFooter.footer_title} />
        <FooterMiddle contactsData={dataContacts} />
        <FooterBottom copy={dataFooter.copy} links={dataFooter.copy_links} />
      </div>
    </footer>
  );
};

Footer.propTypes = {
  dataContacts: PropTypes.object,
  dataFooter: PropTypes.object,
};

export default Footer;
