import React, { useRef, useState } from 'react';
import './Case-photo-slider.scss';

const CasePhotoSlider = (props) => {
  let photoRef = useRef(null);
  let photoWrap = useRef(null);
  let photoArr = photoRef;
  let [wrapPosition, setWrapPosition] = useState([0, 0]);
  let [active, setActive] = useState(0);
  let photoID = 0;

  function swipeleft() {
    let count = wrapPosition[1];
    let positionX = wrapPosition[0];
    if (count === 0) {
      return;
    }
    count--;
    setActive(count);
    positionX += photoArr.current.querySelectorAll('.Photo')[count].clientWidth;
    photoWrap.current.style.transform = `translateX(${positionX}px)`;
    setWrapPosition([positionX, count]);
  }

  function swipeRight() {
    let count = wrapPosition[1];
    let positionX = wrapPosition[0];
    if (count === props.photoArr.length - 1) {
      let count = 0;
      let positionX =
        (window.innerWidth - photoRef.current.querySelectorAll('.Photo')[0].clientWidth) / 2;
      photoWrap.current.style.transform = `translateX(${positionX}px)`;
      setActive(count);
      setWrapPosition([positionX, count]);

      return;
    }

    positionX -= photoArr.current.querySelectorAll('.Photo')[count].clientWidth;
    count++;
    setActive(count);

    photoWrap.current.style.transform = `translateX(${positionX}px)`;
    setWrapPosition([positionX, count]);
  }

  return (
    <div ref={photoRef} className={`Photo-slider ${props.sliderActive ? 'Photo-active' : ''}`}>
      <div
        className="Slider-Btn Close-btn"
        onClick={() => {
          props.closeBtnSlider();
        }}
      >
        <svg
          className="Close-slider"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.2929 13.0369C15.6834 13.4274 15.6834 14.0606 15.2929 14.4511L14.4511 15.2929C14.0606 15.6834 13.4274 15.6834 13.0369 15.2929L8 10.256L2.96311 15.2929C2.57258 15.6834 1.93942 15.6834 1.54889 15.2929L0.707106 14.4511C0.316582 14.0606 0.316582 13.4274 0.707107 13.0369L5.744 8L0.707107 2.96311C0.316582 2.57258 0.316582 1.93942 0.707107 1.54889L1.54889 0.707106C1.93942 0.316582 2.57258 0.316582 2.96311 0.707107L8 5.744L13.0369 0.707107C13.4274 0.316582 14.0606 0.316582 14.4511 0.707107L15.2929 1.54889C15.6834 1.93942 15.6834 2.57258 15.2929 2.96311L10.256 8L15.2929 13.0369Z"
            fill="black"
            fillOpacity="0.6"
          />
        </svg>
      </div>
      <div
        onLoad={() => {
          setWrapPosition([
            (window.innerWidth - photoRef.current.querySelectorAll('.Photo')[0].clientWidth) / 2,
            0,
          ]);
        }}
        ref={photoWrap}
        className="Slider-wrap"
        style={{ transform: `translateX(${props.wrap}px)` }}
      >
        {props.photoArr &&
          props.photoArr.map(({ id, url }) => {
            return (
              <img
                key={id}
                className={`Photo ${active === photoID++ ? 'Photo-style' : ''}`}
                src={url}
                alt="img"
              />
            );
          })}
      </div>
      <div className="Slider-wrap-btn">
        <div
          className="Slider-Btn"
          onClick={() => {
            swipeleft();
          }}
        >
          <svg
            width="12"
            height="20"
            viewBox="0 0 12 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.52349 16.9351L7.46756 9.99105L0.523489 3.04698C-0.174497 2.34899 -0.174497 1.22148 0.523489 0.523491C1.22148 -0.174496 2.34899 -0.174496 3.04698 0.523491L11.2617 8.73825C11.9597 9.43624 11.9597 10.5638 11.2617 11.2617L3.04698 19.4765C2.34899 20.1745 1.22148 20.1745 0.52349 19.4765C-0.1566 18.7785 -0.174497 17.6331 0.52349 16.9351Z"
              fill="#333333"
            />
          </svg>
        </div>
        <div
          className="Slider-Btn"
          onClick={() => {
            swipeRight();
          }}
        >
          <svg
            width="12"
            height="20"
            viewBox="0 0 12 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.52349 16.9351L7.46756 9.99105L0.523489 3.04698C-0.174497 2.34899 -0.174497 1.22148 0.523489 0.523491C1.22148 -0.174496 2.34899 -0.174496 3.04698 0.523491L11.2617 8.73825C11.9597 9.43624 11.9597 10.5638 11.2617 11.2617L3.04698 19.4765C2.34899 20.1745 1.22148 20.1745 0.52349 19.4765C-0.1566 18.7785 -0.174497 17.6331 0.52349 16.9351Z"
              fill="#333333"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CasePhotoSlider;
