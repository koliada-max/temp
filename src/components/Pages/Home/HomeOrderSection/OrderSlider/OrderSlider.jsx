import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.scss';
import NextArrow from '../../../../../svg/arr-left.svg';
import PrewArrow from '../../../../../svg/arr-right.svg';
import PlusOrder from '../../../../../svg/plus_order.svg';
import PropTypes from 'prop-types';
import useLanguage from '../../../../../hooks/useLanguage';

const OrderSlider = ({orderData}) => {
  const orderImages = useStaticQuery(graphql`
    query allOrderQuery {
      source: allFile(filter: { absolutePath: { regex: "/order_slider/" } }) {
        nodes {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH)
          }
        }
      }
    }
  `);
  
  const langToggle = useLanguage;
  const slides = orderImages.source.nodes;

  const slider = React.createRef();
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const counter = currentSlide + 1;

  function handleAfterChange(index) {
    setCurrentSlide(index);
  }

  function SampleNextArrow() {
    return (
      <button
        className="slider-button slider-button__next"
        onClick={() => slider.current.slickNext()}>
        <PrewArrow className="slider-button__arrow wht" />
      </button>
    );
  }

  function SamplePrevArrow() {
    return (
      <button
        className={'slider-button slider-button__prev'}
        onClick={() => slider.current.slickPrev()}>
        <NextArrow className="slider-button__arrow wht" />
      </button>
    );
  }

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    // autoplay: true,
    afterChange: handleAfterChange,
    responsive: [
      {
        breakpoint: 576,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 1199.98,
        settings: { slidesToShow: 3, slidesToScroll: 3 },
      },
    ],
  };

  // const counter = currentSlide + count;

  return (
    <div className="order__slider-wrapper">
      <Slider ref={slider} {...settings} className={'order__slider'}>
        {slides.map((item, index) => {
          const image = getImage(item);
          return (
            <div className="order__slide" key={index}>
              <div className="order__slide-wrapper">
                <div className="order__slide-image_wrapper">
                  <GatsbyImage className="order__slide-image" image={image} alt="alt" width="334px" height="309px"/>
                </div>
                <div className="order__slide-footer">
                  <p className="order__slider-title">Title</p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      <div className="slider__button_wrapper">
        <div className="slider__button_count">
          <currentSlide />
        </div>
        <div className="slider__button_arrow">
          <SamplePrevArrow className="slider__button_arow" />
          <div className="border-button"></div>
          <SampleNextArrow className="slider__button_arow" />
        </div>
        <div className="slider__button_order-container">
          <button className="order__slider_button_order-button">
            <span className="order_button-text">{langToggle(orderData.button_ua, orderData.button_ru, orderData.button_en)}</span>
            <PlusOrder className="plus-order" />
          </button>
        </div>
      </div>
    </div>
  );
};

OrderSlider.propTypes = {
  orderData: PropTypes.object,
};

export default OrderSlider;
