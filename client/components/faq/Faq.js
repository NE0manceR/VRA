import { ImportExport } from '@material-ui/icons';
import React from 'react';
import './Faq.scss';
import BreadCrumbs from '../breadcrumbs/Bread-crumbs';
import Order from '../common/order/Order';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';
import Accordion from './Accordion/Accordion';

let questionArr = [
  {
    id: 0,
    question: 'Чи розробляєте дизайн? Яка вартість такої послуги?',
    answer:
      'Так, ми розробляємо дизайн. Кожен дизайн унікальний, тому вартість послуги розраховується індивідуально.',
  },
  {
    id: 1,
    question: 'Чи можна адаптувати наш дизайн під технічні вимоги відповідного виду робіт? ',
    answer: 'Так, звичайно! За необхідності надані замовником матеріали повністю переробляються!',
  },
  {
    id: 2,
    question: 'Які терміни виготовлення замовлення?',
    answer:
      'Терміни виготовлення визначаються окремо для кожного замовлення. Адже оскільки асортимент послуг широкий, то і терміни різняться.',
  },
  {
    id: 3,
    question: 'Чи можливе термінове виготовлення замовлення за один день?',
    answer: `Так, деякі стандартні замовлення (візитки, флаєри) виготовляємо протягом дня. Проте лише якщо макети вже підготовлені згідно з технічними вимогами.`,
  },
  { id: 4, question: 'Чи здійснюєте доставку?', answer: 'Звичайно, за домовленістю із клієнтом.' },
  {
    id: 5,
    question: 'Які можливі форми оплати?',
    answer:
      'Віддаємо перевагу безготівковій формі розрахунку – на розрахунковий рахунок ФОП третьої групи єдиного податку 5% (не платник ПДВ), або на банківську картку.',
  },
  {
    id: 6,
    question: 'Чи можна реалізувати замовлення в одному примірнику?',
    answer: 'Так, Ви можете зробити замовлення від одного примірника.',
  },
  {
    id: 7,
    question: 'Чи можна надрукувати на наших матеріалах (горнятка, футболка тощо)?',
    answer:
      'Звичайно! Ми з радістю надрукуємо на матеріалах клієнта, якщо вони відповідають технологічним вимогам.',
  },
  {
    id: 8,
    question: 'Чи передбачені знижки на наступні замовлення?',
    answer:
      'Так, звичайно! Кожне звернення фіксується, тож ми знаємо, коли Ви звернетеся до нас повторно. Саме тому, ми готові запропонувати Вам спеціальні ціни.',
  },
];

const Faq = () => {
  return (
    <div className="Faq-bcg Faq showPage">
      <div className="Hero Grid">
        <BreadCrumbs className="Hero__bread">
          <Link to={'/'}>Головна</Link>
          <span>/</span>
          <Link to={'/about'}>Найпоширеніші запитання</Link>
        </BreadCrumbs>
        <h5 className="Title">
          <span>Найпоширеніші</span> <span> запитання</span>
        </h5>
        <div className="Faq__wrap">
          {questionArr.map(({ question, answer, id }) => {
            return <Accordion key={id} question={question} answer={answer} id={id} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faq;
