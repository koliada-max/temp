import React from 'react';
import PropTypes from 'prop-types';
import useLanguage from '../../../../../../hooks/useLanguage';

const AboutText = ({ aboutData }) => {
  const langToggle = useLanguage;

  return (
    <div className="aboutText__section">
      <div className="aboutText__section_text">
        <div className="aboutText__section_text-title">
          {langToggle(aboutData.titleAbout_ua, aboutData.titleAbout_ru, aboutData.titleAbout_en)}
        </div>
        <div className="aboutText__section_text-description">
          {langToggle(
            aboutData.descriptionAbout_ua,
            aboutData.descriptionAbout_ru,
            aboutData.descriptionAbout_en,
          )}
        </div>
        <div className="aboutText__section_text-title history">
          {langToggle(
            aboutData.titleHistory_ua,
            aboutData.titleHistory_ru,
            aboutData.titleHistory_en,
          )}
        </div>
        <div className="aboutText__section_text-description">
          {langToggle(
            aboutData.descriptionHistory_ua,
            aboutData.descriptionHistory_ru,
            aboutData.descriptionHistory_en,
          )}
        </div>
      </div>
    </div>
  );
};

AboutText.propTypes = {
  aboutData: PropTypes.object,
};

export default AboutText;
