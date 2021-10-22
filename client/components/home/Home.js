import React, { useEffect, useRef, useState } from 'react';
import './Home.scss';
import HomeTabs from '../common/home-tabs/Home-tabs';
import Gallery from '../common/gallery/Gallery';
import HowWeWork from '../common/how-we-work/How-we-work';
import Order from '../common/order/Order';
import Reveal from 'react-reveal/Reveal';
import { data } from '../../../public/data';
import Footer from '../footer/Footer';
import { HashLink as Link } from 'react-router-hash-link';
import PartnersSlider from '../common/Partners-slider/Partners-slider';
import MateBtn from '../common/buttons/mate-btn/Mate-btn';
import axios from 'axios';
import FeedBackSlider from '../common/FeedbackSlider/FeedbackSlider';

const Home = () => {
  let [home, setHome] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener('scroll', animation);

    fetch(`https://admin.vra.com.ua/home`)
      .then((response) => response.json())
      .then((res) => {
        setHome(res);
      });

    return () => {
      window.removeEventListener('scroll', animation);
    };
  }, []);

  const grandFather = useRef(null);
  const david = useRef();
  const numbersBlock = useRef(null);
  let bestServicesBlocks = data.bestServicesBlocks;
  let totalNumbers = data.totalNumbers;
  let [numbAnim, setNumAnim] = useState(totalNumbers);
  let [grandAniset, setgrandAni] = useState(false);

  function scroll() {
    window.scrollTo({ top: david.current['clientHeight'], behavior: 'smooth' });
  }

  let technology = data.technology;

  function animation() {
    if (grandFather.current.getBoundingClientRect().top < 300) {
      setgrandAni(true);
    } else {
      setgrandAni(false);
    }

    if (numbersBlock.current.getBoundingClientRect().top < window.innerHeight) {
      showNumbers();
    }
  }

  const showNumbers = () => {
    if (numbAnim[0].status === true) {
      numbAnim[0].status = false;
      const addNumbers = setInterval(() => {
        let newNumb = numbAnim.slice();
        if (newNumb[0].advertising < 25) {
          newNumb[0].advertising += 1.5;
        }
        if (newNumb[0].customers < 13000) {
          newNumb[0].customers += 500;
          if (newNumb[0].customers === 12000) {
            clearInterval(addNumbers);
          }
        }
        if (newNumb[0].projects < 3000) {
          newNumb[0].projects += 200;
        }
        setNumAnim(newNumb);
      }, 50);
    }
  };

  function filter(category) {
    if (category !== 0) {
      loadItemsByCase(category);
    } else {
      loadCases();
    }
  }

  // new photo request=============================//
  let [items, setitems] = useState([]);

  useEffect(() => {
    loadCases();
  }, []);

  function loadCases() {
    axios.get(`https://admin.vra.com.ua/items`).then((res) => {
      const items = res.data;
      setitems(items);
    });
  }

  function loadItemsByCase(caseId) {
    axios.get(`https://admin.vra.com.ua/items/byCase/${caseId}`).then((res) => {
      const items = res.data;
      setitems(items);
    });
  }

  return (
    <div className="Home">
      <Reveal effect="fadeInUp">
        <div>
          <div ref={david} className="Expectation-bcg">
            <div className="Expectation">
              <div className="Expectation__text Grid">
                <div className="text-david-wrap">
                  <h5 className="Dav-title">
                    <span>Перевищуємо</span> ваші очікування<span>!</span>
                  </h5>
                  <p className="Description">
                    VRA – це якісна реклама та поліграфія, з якою про ваш бренд знатимуть усі!
                  </p>
                  <MateBtn
                    link={true}
                    to={'/order'}
                    checkInput={() => {}}
                    className="Expectation_btn-position"
                    type="Matte"
                  >
                    Отримати консультацію
                  </MateBtn>
                </div>
              </div>
              <img
                onClick={scroll}
                className="Expectation__arrow"
                src="/img/expectation/arrow.png"
                alt="img"
              />
            </div>
          </div>
        </div>
      </Reveal>
      <Reveal effect="fadeInUp">
        <div className="Advertising-bcg">
          <div ref={grandFather} className="Advertising">
            <div className="Advertising__grandfather">
              <img
                className="Advertising__grandfather-img"
                style={{
                  transform: grandAniset ? 'rotate3d(0, 1, 0, 0)' : 'rotate3d(0, 1, 0, 20deg)',
                }}
                src="img/HomePage/grandfather/grandfather.png"
                alt="img"
              />
              <img
                className="Advertising__grandfather-element"
                style={{
                  transform: grandAniset ? 'rotate3d(0, 1, 0, 0)' : 'rotate3d(0, 1, 0, -30deg)',
                }}
                src="/img/HomePage/grandfather/bcg3.png"
                alt="img"
              />
              <img
                className="Advertising__grandfather-bcg"
                src="/img/HomePage/grandfather/bcg2.png"
                alt="img"
              />
            </div>
            <div className="Advertising__text">
              <h2 className="Title Advertising__title">
                <span>Велика</span> рекламна <span>агенція</span>
              </h2>
              <p className="Description">{home?.AdvertisingDescription}</p>
              <div ref={numbersBlock} className="Advertising__data">
                <div className="Advertising__data-wrap">
                  <span className="Advertising__data-number">
                    {Math.floor(numbAnim[0].advertising)}+
                  </span>
                  <span className="Advertising__data-text">років на ринку реклами</span>
                </div>
                <div className="Advertising__data-wrap">
                  <span className="Advertising__data-number">{numbAnim[0].customers}+</span>
                  <span className="Advertising__data-text">задоволених клієнтів</span>
                </div>
                <div className="Advertising__data-wrap">
                  <span className="Advertising__data-number">{numbAnim[0].projects}+</span>
                  <span className="Advertising__data-text">реалізованих проєктів</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
      <PartnersSlider />
      <Reveal effect="fadeInUp">
        <div className="Best Grid">
          <h2 className="Title Best__title-wrap">
            <span>Найкращі</span> послуги для <span>вас</span>
          </h2>
          <p className="Description Best_description">{home?.BestServiceDescription}</p>
          <div className="Best__services">
            {bestServicesBlocks.map((box) => {
              return (
                <div key={box.id} className="Best__card-wrap">
                  <Link to={box.link} className="Best__card-link"></Link>
                  <img src={box.img} className="Best__card"></img>
                  <span>{box.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
      <Reveal effect="fadeInUp">
        <div className="OurWorks-bcg">
          <div className="OurWorks Grid">
            <h2 className="Title OurWorks__title ">
              <span> Наші</span> роботи
            </h2>
            <p className="Description OurWorks_description ">
              Кейси, якими
              <span className="Red_line OurWorks_red-line Red_line_position ">пишаємося</span>
            </p>
            <HomeTabs
              changeCaseType={filter}
              classNameMob="TabMob_position"
              classNameDesc="TabDesc_position"
            />
            <Gallery link items={items} />
          </div>
        </div>
      </Reveal>

      <Reveal effect="fadeInUp">
        <div className="Technology-bcg">
          <div className="Technology Grid">
            <div className="Technology__photo">
              {technology.map(({ photo, text, id, link, hoverText }) => {
                return (
                  <div className="Technology__photo-frame" key={id}>
                    <img className="Technology__photo-ex" src={photo} alt="img" />
                    <Link to={link} className="Technology__link">
                      <span className="Technology__link-title">{text}</span>
                      <h3 className="Technology__link-text">{hoverText}</h3>
                    </Link>
                    <span className="Technology__black-text">{text}</span>
                  </div>
                );
              })}
            </div>
            <div className="Technology__text">
              <h2 className="Title Advertising__title">
                <span>Технології</span> <span>друку</span>
              </h2>
              <p className="Description Technology_Descr-position">
                {home?.TechnologyPrintDescription}
              </p>
              <Link to={'/printing-technology#hero'} className="Technology__more">
                Дізнатись більше
              </Link>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal effect="fadeInUp">
        <div className="Why__bcg-color">
          <div className="Why Grid">
            <h2 className="Title Why__title-text">
              <span> Чому</span> обирають<span> VRA</span>
            </h2>
            <div className="Why__descr-list">
              {home?.whyChooseList?.map(({ id, title, description }) => {
                return (
                  <div key={id} className="Why__descr-wrap">
                    <p className="Why__title">{title}</p>
                    <span className="Why__descr">{description}</span>
                  </div>
                );
              })}
            </div>
            <img className="Why__bcg" src="/img/HomePage/why/bcg.png" alt="img" />
          </div>
        </div>
      </Reveal>

      <div className="Feedback Grid">
        <div className="Feedback__wrap">
          <h2 className="Title Feedback__title">
            <span> Відгуки</span>
          </h2>
          <span className="Feedback__red">
            Наші клієнти <span>про нас</span>
          </span>
        </div>
      </div>
      <FeedBackSlider />
      <Reveal effect="fadeInUp">
        <HowWeWork data={home?.HowWeWorkList} />
      </Reveal>

      <Reveal effect="fadeInUp">
        <Order />
      </Reveal>

      <Reveal effect="fadeInUp">
        <div className="Map-bcg">
          <div className="Map">
            <div className="Map__text-wrap">
              <span className="Map__title">Адреса</span>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.google.com/maps?q=Shota+Rustaveli+Street,+8а,+Lviv,+Lviv+Oblast,+Ukraine"
                className="Map__text Map__street"
              >
                м.Львів , вул. Шота Руставелі, 8а кв.2
              </a>
              <span className="Map__title">Контакти</span>
              <a href="mailto:webmaster@example.com" className="Map__text Map__mail">
                vra.com.ua@gmail.com
              </a>
              <a href="tel:+38(050)31-555-31" className="Map__text">
                +38 (050) 31-555-31
              </a>
              <a href="tel:+38(068)11-040-63" className="Map__text">
                +38 (068) 11-040-63
              </a>
              <a href="tel:+38(032)297-01-97" className="Map__text">
                +38 (032) 297-01-97
              </a>
              <div className="Map__social-wrap">
                <a rel="noreferrer" target="_blank" href="https://www.facebook.com/vra.com.ua">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16 0C7.164 0 0 7.164 0 16C0 24.836 7.164 32 16 32C24.836 32 32 24.836 32 16C32 7.164 24.836 0 16 0ZM16 2.66667C23.352 2.66667 29.3333 8.648 29.3333 16C29.3333 23.352 23.352 29.3333 16 29.3333C8.648 29.3333 2.66667 23.352 2.66667 16C2.66667 8.648 8.648 2.66667 16 2.66667ZM10.6667 13.3333H13.3333V11.0773C13.3333 9.056 14.3973 8 16.7947 8H20V11.3333H18.0773C17.4613 11.3333 17.3333 11.5853 17.3333 12.2227V13.3333H20L19.76 16H17.3333V24H13.3333V16H10.6667V13.3333Z"
                      fill="black"
                    />
                  </svg>
                </a>

                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.instagram.com/vra.com.ua/?hl=en"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16 0C7.164 0 0 7.164 0 16C0 24.836 7.164 32 16 32C24.836 32 32 24.836 32 16C32 7.164 24.836 0 16 0ZM16 2.66667C23.352 2.66667 29.3333 8.648 29.3333 16C29.3333 23.352 23.352 29.3333 16 29.3333C8.648 29.3333 2.66667 23.352 2.66667 16C2.66667 8.648 8.648 2.66667 16 2.66667ZM19.2333 9.48933C18.3893 9.45067 18.136 9.44267 16 9.44267C13.864 9.44267 13.6107 9.44933 12.768 9.488C10.5973 9.58667 9.58667 10.6147 9.488 12.768C9.45067 13.6107 9.44133 13.864 9.44133 16C9.44133 18.136 9.45067 18.3893 9.488 19.232C9.588 21.38 10.5947 22.412 12.768 22.512C13.6107 22.5507 13.864 22.5587 16 22.5587C18.1373 22.5587 18.3893 22.5493 19.2333 22.512C21.404 22.4133 22.4133 21.3827 22.5133 19.232C22.5507 18.3893 22.5587 18.136 22.5587 16C22.5587 13.864 22.5507 13.612 22.5133 12.768C22.4133 10.616 21.4027 9.588 19.2333 9.48933ZM16 8C13.8267 8 13.556 8.00933 12.7013 8.04933C9.79467 8.18267 8.18133 9.79467 8.048 12.7013C8.00933 13.556 8 13.828 8 16C8 18.1733 8.00933 18.4453 8.048 19.2987C8.18133 22.204 9.79467 23.8187 12.7013 23.952C13.556 23.9907 13.8267 24 16 24C18.1733 24 18.4453 23.9907 19.3 23.952C22.2013 23.8187 23.8213 22.2067 23.952 19.2987C23.9907 18.4453 24 18.1733 24 16C24 13.828 23.9907 13.556 23.952 12.7013C23.8213 9.79867 22.2067 8.18133 19.3 8.04933C18.4453 8.00933 18.1733 8 16 8ZM11.892 16C11.892 13.7307 13.732 11.892 16 11.892C18.268 11.892 20.108 13.732 20.108 16C20.108 18.2693 18.268 20.108 16 20.108C13.732 20.108 11.892 18.2693 11.892 16ZM16 18.6667C14.5267 18.6667 13.3333 17.4733 13.3333 16C13.3333 14.528 14.5267 13.3333 16 13.3333C17.472 13.3333 18.668 14.5267 18.668 16C18.668 17.4733 17.472 18.6667 16 18.6667ZM19.3093 11.7307C19.3093 11.2 19.74 10.7707 20.2693 10.7707C20.8013 10.7707 21.2307 11.2 21.2307 11.7307C21.2307 12.2613 20.8 12.6907 20.2693 12.6907C19.7387 12.6907 19.3093 12.26 19.3093 11.7307Z"
                      fill="black"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <iframe
              className="Map__map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.5018747695203!2d24.032770315709108!3d49.83302677939497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add67dc3725b5%3A0xdfff41c8a8d44ab2!2s8A%2C%20Shota%20Rustaveli%20St%2C%208%D0%90%2C%208A%2C%20L&#39;viv%2C%20L&#39;vivs&#39;ka%20oblast%2C%2079000!5e0!3m2!1sen!2sua!4v1611869836891!5m2!1sen!2sua"
            />
          </div>
        </div>
      </Reveal>
      <Footer />
    </div>
  );
};

export default Home;
