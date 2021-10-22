import React from 'react';
import './Blocks.scss';

const Blocks = (props) => {
  let number = 1;

  return (
    <div className="Blocks__block">
      {props.array?.map(({ id, title, description }) => {
        return (
          <div key={id} className="Blocks__block-wrap">
            <div className="Blocks__number-wrap">
              <div className="Blocks__circle"></div>
              <span className="Blocks__number"> {number++}.</span>
            </div>
            <span className="Blocks__title">{title}</span>
            <span className="Blocks__text">{description}</span>
          </div>
        );
      })}
    </div>
  );
};
export default Blocks;
