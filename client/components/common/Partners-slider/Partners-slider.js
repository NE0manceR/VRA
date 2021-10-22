import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Partners-slider.scss';

const PartnersSlider = (props) => {
  let photos = useRef();

  let [partner, setPartner] = useState();

  useEffect(() => {
    fetch(`https://admin.vra.com.ua/partners`)
      .then((response) => response.json())
      .then((partners) => {
        setPartner(partners);
      });
  }, []);

  return (
    <div className={`Partners-bcg ${props.className}`}>
      <Link to={'/partners'}></Link>
      <div ref={photos} className="Partners">
        {partner?.map(({ id, logo }) => {
          return (
            <div className="Partners-wrap" key={id}>
              <img className="Partners-logo" src={logo?.url} alt="img" />
            </div>
          );
        })}
        {partner?.map(({ id, logo }) => {
          return (
            <div className="Partners-wrap" key={id}>
              <img className="Partners-logo" src={logo?.url} alt="img" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PartnersSlider;
