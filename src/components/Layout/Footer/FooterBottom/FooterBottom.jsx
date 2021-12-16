import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';
import PropTypes from 'prop-types';
import useLanguage from '../../../../hooks/useLanguage';
import Nunox from '../../../../svg/nunox.svg';

const FooterBottom = ({ copy, links }) => {
  const langToggle = useLanguage;

  return (
    <div className="footer-bottom">
      <div className="footer-bottom__copy">
        <span className="footer-bottom__copy-title">
          {langToggle(copy.title_ua, copy.title_ru)}
        </span>
        <ul className="footer-bottom__copy-nav">
          {links.map((item, index) => {
            return (
              <li className="copy-nav__item" key={index}>
                <Link to={item.link} className="copy-nav__item-limk">
                  <span className="copy-nav__item-limk__title">
                    {langToggle(item.title_ua, item.title_ru)}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <a href="https://nunox.co/" className="footer-bottom__create" target="blank">
        <Nunox />
      </a>
    </div>
  );
};

FooterBottom.propTypes = {
  copy: PropTypes.object,
  links: PropTypes.array,
};

export default FooterBottom;
