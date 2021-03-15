import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Partners-slider.scss';

const PartnersSlider = (props) => {
  let photos = useRef();

  let partnersArr = [
    { id: 0, src: '/img/PartnerLogo/Top 10/bw_agym.png' },
    { id: 1, src: '/img/PartnerLogo/Top 10/bw_celentano.png' },
    { id: 2, src: '/img/PartnerLogo/Top 10/bw_ecoForum.png' },
    { id: 3, src: '/img/PartnerLogo/Top 10/bw_faac.png' },
    { id: 4, src: '/img/PartnerLogo/Top 10/bw_galca.png' },
    { id: 5, src: '/img/PartnerLogo/Top 10/bw_genesis.png' },
    { id: 6, src: '/img/PartnerLogo/Top 10/bw_ibis.png' },
    { id: 7, src: '/img/PartnerLogo/Top 10/bw_miskarada.png' },
    { id: 8, src: '/img/PartnerLogo/Top 10/bw_oblrada.png' },
    { id: 9, src: '/img/PartnerLogo/Top 10/bw_toyota.png' },
    { id: 10, src: '/img/PartnerLogo/Top 10/bw_uku.png' },
  ];

  return (
    <div className={`Partners-bcg ${props.className}`}>
      <Link to={'/partners'}></Link>
      <div ref={photos} className="Partners">
        {partnersArr.map(({ id, src }) => {
          return (
            <div className="Partners-wrap" key={id}>
              <img className="Partners-logo" src={src} alt="img" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PartnersSlider;
