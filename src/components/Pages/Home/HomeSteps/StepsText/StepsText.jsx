import React from 'react';
import PropTypes from 'prop-types';
import useLanguage from '../../../../../hooks/useLanguage';

const StepsText = ({ stepsData }) => {
  const langToggle = useLanguage;

  return (
    <div className="stepsText__text-section">
      <div className="text-section__counts-wrapper">
        <div className="text-section__steps-data">01.</div>
        <div className="text-section__count-text">
          {langToggle(stepsData.first_ua, stepsData.first_ru, stepsData.first_en)}
        </div>
      </div>
      <div className="text-section__counts-wrapper">
        <div className="text-section__steps-data">02.</div>
        <div className="text-section__count-text">
          {langToggle(stepsData.second_ua, stepsData.second_ru, stepsData.second_en)}
        </div>
      </div>
      <div className="text-section__counts-wrapper">
        <div className="text-section__steps-data">03.</div>
        <div className="text-section__count-text">
          {langToggle(stepsData.third_ua, stepsData.third_ru, stepsData.third_en)}
        </div>
      </div>
      <div className="text-section__counts-wrapper">
        <div className="text-section__steps-data">04.</div>
        <div className="text-section__count-text">
          {langToggle(stepsData.fourth_ua, stepsData.fourth_ru, stepsData.fourth_en)}
        </div>
      </div>
    </div>
  );
};

StepsText.propTypes = {
  stepsData: PropTypes.object,
};

export default StepsText;
