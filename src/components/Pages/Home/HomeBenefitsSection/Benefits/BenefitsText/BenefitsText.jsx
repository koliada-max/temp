import React from 'react';
import PropTypes from 'prop-types';
import useLanguage from '../../../../../../hooks/useLanguage';

const BenefitsText = ({ benefitsData }) => {
  const langToggle = useLanguage;

  return (
    <div className="benefitText__text-section">
      <div className="text-section__counts-wrapper">
        <div className="text-section__count-data">01.</div>
        <div className="text-section__count-text">
          {langToggle(benefitsData.first_ua, benefitsData.first_ru, benefitsData.first_en)}
        </div>
      </div>
      <div className="text-section__counts-wrapper">
        <div className="text-section__count-data">02.</div>
        <div className="text-section__count-text">
          {langToggle(benefitsData.second_ua, benefitsData.second_ru, benefitsData.second_en)}
        </div>
      </div>
      <div className="text-section__counts-wrapper">
        <div className="text-section__count-data">03.</div>
        <div className="text-section__count-text">
          {langToggle(benefitsData.third_ua, benefitsData.third_ru, benefitsData.third_en)}
        </div>
      </div>
      <div className="text-section__counts-wrapper">
        <div className="text-section__count-data">04.</div>
        <div className="text-section__count-text">
          {langToggle(benefitsData.fourth_ua, benefitsData.fourth_ru, benefitsData.fourth_en)}
        </div>
      </div>
    </div>
  );
};

BenefitsText.propTypes = {
  benefitsData: PropTypes.object,
};

export default BenefitsText;
