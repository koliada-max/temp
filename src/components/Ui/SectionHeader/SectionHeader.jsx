import React from 'react';
import PropTypes from 'prop-types';

const SectionHeader = ({ sectionCount, sectionDescription, sectionTitle }) => {
  return (
    <header className="section-header">
      <span className="header__count-wrapper">
        <span className="header__count">{sectionCount}</span>
      </span>
      <div className="section-header__wrapper">
        <p className="header__description">
          <span className="header__description-count">{sectionCount}</span> {sectionDescription}
        </p>
        <h2 className="header__title">{sectionTitle}</h2>
      </div>
    </header>
  );
};

SectionHeader.propTypes = {
  sectionCount: PropTypes.string,
  sectionTitle: PropTypes.string,
  sectionDescription: PropTypes.string,
};

export default SectionHeader;
