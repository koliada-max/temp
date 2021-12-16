import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const LightBox = ({
  // image,
  closeModal,
  goBack,
  goForward,
  selectedImage,
  images,
  showLightbox,
  currentImage,
}) => {
  const image = getImage(currentImage);
  return (
    <div className={showLightbox ? 'lightbox is-show' : 'lightbox'}>
      <div className="lightbox-overlay" onClick={closeModal}></div>
      <div className="lightbox-wrapper">
        <div className="lightbox-image__wrapper_photographer">
          <GatsbyImage image={image} className="lightBox-image" alt="best foto" />
        </div>

        <button className="light-box-close" onClick={closeModal}>
          Close
        </button>
        <button
          className="light-box__arrow light-box__prev"
          onClick={goBack}
          disabled={selectedImage === 0}>
          Prev
        </button>
        <button
          className="light-box__arrow light-box__next"
          onClick={goForward}
          disabled={selectedImage === images.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

LightBox.propTypes = {
  image: PropTypes.string,
  closeModal: PropTypes.func,
  goBack: PropTypes.func,
  goForward: PropTypes.func,
  selectedImage: PropTypes.bool,
  images: PropTypes.array,
  showLightbox: PropTypes.bool,
};

export default LightBox;
