import React from 'react';
import PropTypes from 'prop-types';
import useLanguage from '../../../../hooks/useLanguage';
import SectionHeader from '../../../Ui/SectionHeader/SectionHeader';
import Galery from './Galery/Galery';
import Buttons from './Buttons/Buttons';

const HomeGalery = ({ galeryData }) => {
  const langToggle = useLanguage;
  return (
    <section className="homeGalery">
      <div className="page-wrapper">
        <div className="homeGalery__content">
          <SectionHeader
            sectionCount={'07.'}
            sectionDescription={langToggle(
              galeryData.description_ua,
              galeryData.description_ru,
              galeryData.description_en,
            )}
            sectionTitle={langToggle(galeryData.title_ua, galeryData.title_ru, galeryData.title_en)}
          />
          <Galery />
          <Buttons galeryData={galeryData} />
        </div>
      </div>
    </section>
  );
};

HomeGalery.propTypes = {
  galeryData: PropTypes.object,
};

export default HomeGalery;
