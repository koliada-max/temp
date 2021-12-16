import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import useLanguage from '../../../../hooks/useLanguage';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import PlayWhite from '../../../../svg/play.svg';

const HomeVideoSection = () => {
  const data = useStaticQuery(graphql`
    query {
      sub: file(relativePath: { eq: "video.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `);

  const imageSub = getImage(data.sub);
  const langToggle = useLanguage;
  return (
    <section className="homeVideo">
      <div className="homeVideo__wrapper">
        <div className="homeVideo__image-container">
          <GatsbyImage
            image={imageSub}
            alt={langToggle('Обкладинка', 'Обложка', 'Cover')}
            className="homeVideo__image"
          />
        </div>
        <div className="homeVideo__button-container">
          <button href="/" className="button-video">
            <div className="play-container">
              <PlayWhite className="play-icon" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeVideoSection;
