/* eslint-disable react/display-name */
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import './FeedbackSlider.scss';

const FeedBackSlider = () => {
  let [slide, setSlide] = useState();

  useEffect(() => {
    fetch(`https://admin.vra.com.ua/responses`)
      .then((response) => response.json())
      .then((search) => {
        setSlide(search);
      });
  }, []);

  const settings = {
    focusOnSelect: true,
    className: 'center',
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,
    centerPadding: '60px',
    centerMode: true,

    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   },
      // },
    ],

    customPaging: () => (
      <div className="dot-wrap">
        <div className="inner-dot"></div>
      </div>
    ),
  };

  return (
    <div className="feedback-slider-wrap">
      <Slider {...settings}>
        {slide?.map(({ id, photo, industry, client, description }) => {
          return (
            <div key={id} className="main-block">
              <div className="content-block">
                <h6>{description}</h6>
                <div className="text-logo-wrap">
                  <img className="feedBackImg" src={photo?.url} alt="img" />
                  <div className="fedback-text">
                    <span>{client}</span>
                    <span>{industry}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default FeedBackSlider;
