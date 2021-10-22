import React, { useEffect, useState } from 'react';
import SliderCard from '../slider-card/Slider-Card';
import Carousel from 'react-elastic-carousel';
import PaginationWrap from '../PaginationWrap/PaginationWrap';
import SliderPagination from '../SliderPagination/SliderPagination';
import axios from 'axios';

const Slider = () => {
  // let sliderData = [
  //   {
  //     id: 0,
  //     avatar: '/img/HomePage/slider/vodokanal.jpg',
  //     text:
  //       '“Чудові фахівці із хорошою кваліфікацією, які завжди допоможуть і підкажуть найкращий варіант виконання вашого замовлення. Організація, співпраця з якою приносить лише задоволення від якісно виконаної роботи.”',
  //     title: 'Христина Копильчак',
  //     description: 'ЛКП Львівводоканал',
  //   },
  //   {
  //     id: 1,
  //     avatar: '/img/HomePage/slider/ecoForum.jpg',
  //     text:
  //       '“Висока якість роботи в короткі терміни – це про команду Велика Рекламна Агенція. Роботою команди повністю задоволені. Працюють швидко, вникають в потреби замовника, чітко виконують поставлені завдання, пропонують альтернативні рішення. Сміливо рекомендуємо і будемо користуватися послугами в подальшому.”',
  //     title: 'Lviv Eco Forum',
  //     description: 'Уляна Горбата',
  //   },
  //   {
  //     id: 2,
  //     avatar: '/img/HomePage/slider/mykolaivcement.jpg',
  //     text:
  //       '“Наша співпраця з VRA в різноманітних напрямках триває вже більше 10 років. Це поліграфія, візуальна реклама, сувенірна продукція, брендування і пошиття фірмового одягу. Безумовними перевагами є дотримання термінів і висока якість.”',
  //     title: 'Василь Русиник',
  //     description: 'ПАТ «Миколаївцемент»',
  //   },
  //   {
  //     id: 3,
  //     avatar: '/img/HomePage/slider/authors.jpg',
  //     text:
  //       '“Витончений підхід до замовника, розуміння індивідуальних потреб, бажання перевершити сподівання, йти на зустріч клієнту і робити пересічні речі унікальними.”',
  //     title: 'Авторська Cтоматологія',
  //     description: 'Cтоматологія',
  //   },
  //   {
  //     id: 4,
  //     avatar: '/img/HomePage/slider/agym.jpg',
  //     text:
  //       '"Наша співпраця триває не перше десятиліття, разом здійснили не один проект. Хочемо зазначити професійний підхід, здатність зробити неможливе у короткий термін, завжди готові до контакту, завжди відповідальні."',
  //     title: 'Agym',
  //     description: 'Фітнес клуб',
  //   },
  //   {
  //     id: 5,
  //     avatar: '/img/HomePage/slider/genesis.jpg',
  //     text:
  //       '“Агенція вирізняється нестандартним підходом до вирішення поставлених задач. Виготовляють ексклюзивні речі у невеликих кількостях.”',
  //     title: 'GENESIS',
  //     description: 'Христина Кисіль',
  //   },
  //   {
  //     id: 6,
  //     avatar: '/img/HomePage/slider/nys.jpg',
  //     text: '“Чітко поставлена робота, терміни і якість взяті за основу, дякуємо!”',
  //     title: 'Андрій Калник',
  //     description: 'TзОВ “Нью Йорк франшиза”',
  //   },
  //   {
  //     id: 7,
  //     avatar: '/img/HomePage/slider/loza.jpg',
  //     text:
  //       '“Швидке порозуміння, чіткі терміни та якість, яка завжди на високому рівні. Можливість замовляти нестандартні вироби.”',
  //     title: 'ТД “ЛОЗА”',
  //     description: 'Оксана Страз',
  //   },
  //   {
  //     id: 8,
  //     avatar: '/img/HomePage/slider/lviv.jpg',
  //     text:
  //       '“VRA – це завжди відкриті до співпраці люди, навіть у неробочий час, можливість виконати замовлення на вчора в найкоротші терміни.”',
  //     title: 'Роман Яцикович',
  //     description: 'ЛМР',
  //   },
  //   {
  //     id: 9,
  //     avatar: '/img/HomePage/slider/logo_loda.jpg',
  //     text:
  //       'Комплексний і ґрунтовний підхід до виконання замовлень, виготовляють як великі тиражі, так і поштучну продукцію. Жодних проблем з логістикою, а всі замовлення виконуються під ключ',
  //     title: 'Роман Шепеляк',
  //     description: 'ЛОДА',
  //   },
  // ];

  let breakPoints = [
    { width: 320, itemsToShow: 1, outerSpacing: 0 },
    { width: 468, itemsToShow: 2, outerSpacing: 25 },
    { width: 1124, itemsToShow: 2, outerSpacing: 0 },
    { width: 1024, itemsToShow: 3, outerSpacing: 20 },
    { width: 1400, itemsToShow: 4, outerSpacing: 20 },
    { width: 1601, itemsToShow: 4, outerSpacing: 20 },
  ];

  let [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    axios.get(`https://admin.vra.com.ua/responses`).then((res) => {
      const items = res.data;
      setSliderData(items);
    });
    // fetch(`https://admin.vra.com.ua/responses`)
    //   .then((response) => response.json())
    //   .then((feedback) => {
    //     setSliderData(feedback);
    //   });
  }, []);

  // { width: 320, itemsToShow: 1, outerSpacing: 0 },
  // { width: 468, itemsToShow: 2, outerSpacing: 25 },
  // { width: 1124, itemsToShow: 2, outerSpacing: 0 },
  // { width: 1024, itemsToShow: 3, outerSpacing: 20 },
  // { width: 1400, itemsToShow: 4, outerSpacing: 20 },
  // { width: 1600, itemsToShow: 4, outerSpacing: 20 },
  // photo, client, id, description, industry

  return (
    <div style={{ paddingBottom: 100 }}>
      <Carousel
        itemsToShow={3}
        initialActiveIndex={4}
        breakPoints={breakPoints}
        itemPadding={[32, 16]}
        renderPagination={({ pages, activePage, onClick }) => {
          return (
            <PaginationWrap direction="row">
              {pages?.map((page) => {
                const isActivePage = activePage === page;

                return (
                  <SliderPagination
                    key={page}
                    onClick={() => onClick(page)}
                    active={isActivePage}
                  />
                );
              })}
            </PaginationWrap>
          );
        }}
      >
        {sliderData?.map(({ id, photo, text, title, description }) => {
          return (
            <SliderCard
              key={id}
              avatar={photo.url}
              description={title}
              text={description}
              title={text}
            />
          );
        })}
      </Carousel>
    </div>
  );
};

export default Slider;
