import React, { useState, useRef } from 'react';
import { Fragment } from 'react';
import CasePhotoSlider from '../../case-template/case-photo-slider/Case-photo-slider';
import WhiteBtn from '../buttons/white-btn/White-btn';
import './Gallery-photo.scss';

const GalleryPhoto = (props) => {
  let caseRef = useRef();
  let [photoCount, setPhotoCount] = useState(0);
  let [gridCount, setGridCount] = useState(5);
  let [showBtn, setShowBtn] = useState(false);
  let [wrapP, setWrapP] = useState(0);
  let [sliderStatus, setSliderStatus] = useState(false);

  function setWrap() {
    setWrapP((window.innerWidth - caseRef.current.querySelectorAll('.Photo')[0].clientWidth) / 2);
  }

  function funcSlider() {
    setSliderStatus((sliderStatus = !sliderStatus));
  }

  function morePhoto(param) {
    console.log(param.length);
    setGridCount((gridCount += 5));

    if (gridCount >= param.length) {
      setShowBtn(true);
    }
  }

  return (
    <div className="Photo-gallery-wrap">
      <div className="P-gallery Grid">
        <div className="P-wrap">
          <h2 className="Title P-wrap__title">
            <span>Фото</span> <span>проєкту</span>
          </h2>
          <div className="Grid-photo">
            {props?.items?.map((item) => {
              return (
                <Fragment key={item.id}>
                  {photoCount < gridCount ? (
                    <div
                      className={`Grid-photo__photo-${photoCount++} Photo-styles`}
                      onClick={() => {
                        funcSlider();
                        setWrap();
                      }}
                      style={{
                        animation: `showPhoto 0.3s forwards ${Math.random() * (0.6 - 0.4) + 0.1}s`,
                      }}
                    >
                      <img className="Grid-photo__img" src={item.url} alt="img" />
                      <img className="Grid-photo__eye" src="/img/social/eye.svg" alt="img" />
                    </div>
                  ) : null}
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
      <div className={`btn-wrap ${showBtn ? 'btn-wrap-none' : ''}`}>
        <WhiteBtn
          morePhotoInLogo={() => {
            morePhoto(props?.items);
          }}
        >
          Переглянути більше
        </WhiteBtn>
      </div>
      <CasePhotoSlider
        wrap={wrapP}
        photoArr={props?.items}
        sliderActive={sliderStatus}
        closeBtnSlider={() => {
          funcSlider();
        }}
      />
    </div>
  );
};

export default GalleryPhoto;
