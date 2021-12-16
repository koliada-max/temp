import React from 'react';
import PropTypes from 'prop-types';
import useLanguage from '../../../../hooks/useLanguage';
// import Arrow from '../../../../svg/arr_right_top.svg';
// import TextUa from '../../../../svg/footer_text_ua.svg';
// import TextRu from '../../../../svg/footer_text_ru.svg';

const FooterTop = ({ contactsData, title }) => {
  const langToggle = useLanguage;

//   const iconText = langToggle(
    // <TextUa clas="scroll-top__text" />,
    // <TextRu clas="scroll-top__text" />,
//   );

  return (
    <div className="footer-top">
      <div className="footer-top__title-wrapper">
        <span className="footer-top__title">{langToggle(title.title_ua, title.title_ru)}</span>
      </div>
      <div className="footer-top__contacts-wrapper">
        <div className="footer-top__contacts-item">
          <span className="footer-top__contacts-item__title">Телефон:</span>
          <a
            href={`tel:` + contactsData.phone.replace(/[- )(]/g, '')}
            className="footer-top__contacts-item__link"
            target="blank">
            <span className="footer-top__contacts-item__link-title">{contactsData.phone}</span>
          </a>
        </div>
        <div className="footer-top__contacts-item">
          <span className="footer-top__contacts-item__title">{langToggle('Пошта:', 'Почта:')}</span>
          <a
            href={'mailto:' + contactsData.mail}
            className="footer-top__contacts-item__link"
            target="blank">
            <span className="footer-top__contacts-item__link-title">{contactsData.mail}</span>
          </a>
        </div>
      </div>
      <div className="scroll-top__wrapper">
        <a href="#top-section" data-scroll-to className="scroll-top">
          {/* <span className="scroll-top__text-wrapper">{iconText}</span> */}
          {/* <Arrow className="scroll-top__arrow" /> */}
        </a>
      </div>
    </div>
  );
};

FooterTop.propTypes = {
  contactsData: PropTypes.object,
  title: PropTypes.object,
};

export default FooterTop;
