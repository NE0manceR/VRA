import React, { useRef, useState } from 'react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Accordion.scss';

const Accordion = (props) => {
  let [active, setActive] = useState(false);
  let answer = useRef();

  function showAnswer() {
    setActive((active = !active));
  }

  return (
    <div className="Accordion">
      <div
        onClick={() => {
          showAnswer();
        }}
        className={`Accordion__title ${active ? 'Accordion__title-active' : ''}`}
      >
        <span className={`Accordion__question ${active ? 'Accordion__question-active' : ''}`}>
          {props.question}
        </span>
        <img
          className={`Accordion__arrow ${active ? 'Accordion__arrow-active' : ''}`}
          src="/img/ic-faq-arrow.svg"
          alt="img"
        />
      </div>
      <div
        style={{ height: active ? answer.current.clientHeight + 60 : 0 }}
        className={`Accordion__answer-wrap ${active ? 'Accordion__answer-wrap-active' : ''}`}
      >
        <p ref={answer} className={`Accordion__answer ${active ? 'Accordion__answer-active' : ''}`}>
          {props.id === 3 ? (
            <Fragment>
              Так, деякі стандартні замовлення (візитки, флаєри) виготовляємо протягом дня. Проте
              лише якщо макети вже підготовлені згідно з{' '}
              <Link to={'requirements'}>технічними вимогами</Link>.
            </Fragment>
          ) : (
            props.answer
          )}
        </p>
      </div>
    </div>
  );
};

export default Accordion;
