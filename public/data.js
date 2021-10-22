export const data = {
  header: {
    headerNav: [
      { id: 0, Link: '/case', linkName: 'Кейси' },
      { id: 1, Link: '/category', linkName: 'Дизайн' },
      { id: 2, Link: '/category', linkName: 'Друк' },
      { id: 3, Link: '/category', linkName: 'Промо-сувеніри' },
      { id: 4, Link: '/category', linkName: 'Візуальна реклама' },
      { id: 5, Link: '/category', linkName: 'Текстиль' },
      { id: 6, Link: '/about', linkName: 'Про нас' },
    ],
    enterValue: false,
    searchStatus: true,
    hoverMenu: false,
    hoverKey: 0,
    hoverContent: 0,
    hoverContentStatus: false,
    hoverLeavMouese: false,
    hoverImgText: [
      {},
      {
        src: '/img/header/hoverMenu/Image.jpg',
        text: 'Упаковка важлива так само, як і продукт. Іноді навіть важливіше »',
        author: 'Джек Траут',
      },
      {
        src: '/img/header/hoverMenu/Image2.png',
        text: '«Без реклами відбудеться найжахливіше - не відбудеться нічого»',
        author: 'Том Біскарді',
      },
      {
        src: '/img/header/hoverMenu/Image3.jpg',
        text: '"Реклама - основна причина, по якій підприємці підкорили Землю"',
        author: 'Джеймс Р. Адамс',
      },
      {
        src: '/img/header/hoverMenu/Image4.jpg',
        text:
          '"Реклама підштовхує людей ближче до товару. Мерчендайзинг підштовхує товар ближче до людей"',
        author: 'Морріс Хайт',
      },
      {
        src: '/img/header/hoverMenu/Image5.jpg',
        text: '"Реклама - найбільше мистецтво 20 століття"',
        author: 'Маршалл МакЛухан',
      },
      {
        src: '/img/header/hoverMenu/Image6.jpg',
        text: '"Реклама подібна до знань. Коли її мало – це небезпечно"',
        author: 'Пол Барнум',
      },
    ],
  },

  hover: {
    list: [
      {},
      {
        design: [
          { id: 0, linkName: 'Логотип', linkUrl: '/logotype' },
          { id: 1, linkName: 'Брендбук', linkUrl: '/brandbook' },
          { id: 2, linkName: 'Фірмовий стиль', linkUrl: '/corporate' },
          { id: 3, linkName: '3D Дизайн', linkUrl: '/3d' },
        ],
      },

      {
        category1: [
          { id: 0, linkName: 'Друк на папері', linkUrl: '' },
          { id: 1, linkName: 'Візитки, флаєри', linkUrl: '' },
          { id: 2, linkName: 'Каталоги, буклети', linkUrl: '' },
          { id: 3, linkName: 'Коробки, упаковка', linkUrl: '' },
          { id: 4, linkName: 'Наклейки, етикетки', linkUrl: '' },
          { id: 5, linkName: 'Афіші, сертифікати, квитки', linkUrl: '' },
          { id: 6, linkName: 'Папки, меню, сети', linkUrl: '' },
          { id: 7, linkName: 'Календарі, календарики', linkUrl: '' },
          { id: 8, linkName: 'Пакети паперові', linkUrl: '' },
          { id: 9, linkName: 'Карти туристичні', linkUrl: '' },
        ],
        category2: [
          { id: 0, linkName: 'Широкоформат', linkUrl: '' },
          { id: 1, linkName: 'Банери, постери', linkUrl: '' },
          { id: 2, linkName: 'Плакати', linkUrl: '' },
          { id: 3, linkName: 'Фотопано, фотошпалери', linkUrl: '' },
          { id: 4, linkName: 'Пресволи, фотозони', linkUrl: '' },
          { id: 5, linkName: 'Прапори', linkUrl: '' },
          { id: 6, linkName: 'Х банери (павуки)', linkUrl: '' },
          { id: 7, linkName: 'Рол-апи', linkUrl: '' },
        ],
        category3: [
          { id: 0, linkName: 'Лого на одязі/тканині', linkUrl: '' },
          { id: 1, linkName: 'Друк і вишивка  на футболках, поло', linkUrl: '' },
          { id: 2, linkName: 'Друк і вишивка на кепках , шапках ', linkUrl: '' },
          { id: 3, linkName: 'Друк і вишивка на флісах, худі', linkUrl: '' },
          { id: 4, linkName: 'Шкарпетки з логотипом', linkUrl: '' },
          { id: 5, linkName: 'Прапори, прапорці, бірки', linkUrl: '' },
          { id: 6, linkName: 'Друк на екосумках, наплічниках', linkUrl: '' },
        ],
        category4: [
          { id: 0, linkName: 'Друк на посуді, пластику, металі', linkUrl: '' },
          { id: 1, linkName: 'Друк на посуді', linkUrl: '' },
          { id: 2, linkName: 'Пластикові картки, візитики', linkUrl: '' },
          { id: 3, linkName: 'Значки, бейджі метал/пластик', linkUrl: '' },
          { id: 4, linkName: 'Дипломи, нагороди на металі', linkUrl: '' },
          { id: 5, linkName: 'Лазерне гравіювання', linkUrl: '' },
        ],
        category5: [
          { id: 0, linkName: 'Технології друку', linkUrl: '/printing-technology' },
          { id: 1, linkName: 'Офсет', linkUrl: '/printing-technology#offset' },
          { id: 2, linkName: 'Цифровий друк', linkUrl: '/printing-technology#digital' },
          { id: 3, linkName: 'Сольвентний друк', linkUrl: '/printing-technology#solvent' },
          { id: 4, linkName: 'Екосольвентний друк', linkUrl: '/printing-technology#eco' },
          { id: 5, linkName: 'Трафаретний друк', linkUrl: '/printing-technology#stencil' },
          { id: 6, linkName: 'Тамподрук', linkUrl: '/printing-technology#tampon' },
          { id: 7, linkName: 'Сублімація', linkUrl: '/printing-technology#sublimation' },
          { id: 8, linkName: 'Термотрансферний друк', linkUrl: '/printing-technology#termo' },
          { id: 9, linkName: 'Вишивка', linkUrl: '/printing-technology#embroidery' },
          { id: 10, linkName: 'Тиснення', linkUrl: '/printing-technology#pressure' },
          { id: 11, linkName: 'Лазерне гравіювання', linkUrl: '/printing-technology#lazer' },
          { id: 12, linkName: 'Деколь', linkUrl: '/printing-technology#dekol' },
          { id: 13, linkName: 'Хімічне травлення', linkUrl: '/printing-technology#trav' },
        ],
      },
      {
        promo: [
          { id: 1, linkName: 'Ручки метал, пластик, олівці', linkUrl: '' },
          { id: 2, linkName: 'Ділові щоденники, записники', linkUrl: '' },
          { id: 3, linkName: 'Пластикові картки, візитки', linkUrl: '' },
          { id: 4, linkName: 'Горнята, тарілки, посуд з лого', linkUrl: '' },
          { id: 5, linkName: 'Пляшки, ботли, термоси', linkUrl: '' },
          { id: 6, linkName: 'Дипломи, нагороди на металі', linkUrl: '' },
          { id: 7, linkName: 'Значки, бейджі метал/пластик', linkUrl: '' },
          { id: 8, linkName: 'Стіки цукор/сіль', linkUrl: '' },
          { id: 9, linkName: 'Ялинкові іграшки та інше', linkUrl: '' },
          { id: 10, linkName: 'Флешки, брелоки, годинники', linkUrl: '' },
          { id: 11, linkName: 'Номерки, бірки метал/пластик', linkUrl: '' },
          { id: 12, linkName: 'Парасолі, ліхтарики', linkUrl: '' },
        ],
      },
      {
        visual: [
          { id: 1, linkName: 'Вивіски з погодженням', linkUrl: '' },
          { id: 2, linkName: 'Оформлення вітрин/вікон', linkUrl: '' },
          { id: 3, linkName: 'Оформлення траспорту', linkUrl: '' },
          { id: 4, linkName: 'Дахові рекламні конструкції', linkUrl: '' },
          { id: 5, linkName: 'Дорожні вказівники/знаки', linkUrl: '' },
          { id: 6, linkName: 'Кутки споживача, стенди', linkUrl: '' },
          { id: 7, linkName: 'Навігаційні таблиці, шильди', linkUrl: '' },
          { id: 8, linkName: 'Прапори, прапорці', linkUrl: '' },
          { id: 9, linkName: 'Пресволи, фотозони', linkUrl: '' },
          { id: 10, linkName: 'Х-банери (павуки), ролапи', linkUrl: '' },
        ],
      },

      {
        textile: [
          { id: 1, linkName: 'Медичні костюми, халати', linkUrl: '' },
          { id: 2, linkName: 'Фартухи', linkUrl: '' },
          { id: 3, linkName: 'Корпоративний одяг', linkUrl: '' },
          { id: 4, linkName: 'Екосумки, наплічники', linkUrl: '' },
          { id: 5, linkName: 'Куртки, дощовики', linkUrl: '' },
          { id: 6, linkName: 'Шкарпетки з логотипом', linkUrl: '' },
          { id: 7, linkName: 'Нанесення логотипів', linkUrl: '' },
        ],
      },

      {
        about: [
          { id: 1, linkName: 'Контакти', linkUrl: 'about#contacts' },
          { id: 2, linkName: 'Способи оплати', linkUrl: '/payment' },
          { id: 3, linkName: 'Вимоги до макету', linkUrl: '/requirements' },
          { id: 4, linkName: 'FAQ', linkUrl: '/faq' },
        ],
      },
    ],
  },

  OurWorksTabs: [
    {
      tabsName: [
        { id: 0, name: 'Всі роботи', category: 'all' },
        { id: 1, name: 'Дизайн', category: 'design' },
        { id: 2, name: 'Друк', category: 'printing' },
        { id: 3, name: 'Сувенірка', category: 'souvenirs' },
        { id: 4, name: 'Візуальна реклама', category: 'visual' },
        { id: 5, name: 'Текстиль', category: 'textile' },
      ],
    },
  ],

  bestServicesBlocks: [
    { id: 0, link: '/services/design', title: 'Дизайн', img: '/img/HomePage/best/Photo1.png' },
    { id: 1, link: '/services/druk', title: 'Друк', img: '/img/HomePage/best/Photo2.png' },
    {
      id: 2,
      link: '/services/promo-suveniri',
      title: 'Сувенірна продукція',
      img: '/img/HomePage/best/Photo3.png',
    },
    { id: 3, link: '/services/vizualna-reklama', title: 'Візуальна реклама', img: '/img/HomePage/best/Photo4.png' },
    { id: 4, link: '/services/tekstil', title: 'Текстиль', img: '/img/HomePage/best/Photo5.png' },
  ],
  totalNumbers: [
    {
      status: true,
      advertising: 0,
      customers: 0,
      projects: 0,
    },
  ],

  technology: [
    {
      id: 1,
      photo: '/img/HomePage/technology/paper.png',
      text: 'Друк на папері',
      link: '/case-category/druk-na-paperi',
      hoverText:
        'Офсетний, цифровий, шовкодрук чи фольгування? Ви обираєте паперовий носій, ми підбираємо технологію',
    },
    {
      id: 2,
      photo: '/img/HomePage/technology/cloth.png',
      text: 'Друк на тканині',
      link: '/case-category/logo-na-odyazi-tkanini',
      hoverText:
        'Наносимо ваш бренд на тканину за допомогою шовкодруку, сублімації, термоперенесення та вишивки',
    },
    {
      id: 3,
      photo: '/img/HomePage/technology/dishes.png',
      text: 'Друк на посуді',
      link: '/case-category/druk-na-posudi-plastiku-metali',
      hoverText:
        'Деколювання та сублімація - дві надточні технології, щоб ваше зображення виглядало на посуді неперевершено',
    },
    {
      id: 4,
      photo: '/img/HomePage/technology/material.png',
      text: 'Друк на металі',
      link: '/case-category/druk-na-posudi-plastiku-metali',
      hoverText:
        'Вш бренд на металевій поверхні? Легко, адже у нас друкують гравертоном, гравіюють лазером  та емалюють.',
    },
  ],

  whyVra: [
    {
      id: 1,
      title: 'Досвід',
      text:
        'За 25 років на ринку реклами ми працювали з найрізноманітнішими клієнтами, пройшли сотні випробувань та' +
        ' знаємо, як зробити ваш бренд справді працюючим.',
    },
    {
      id: 2,
      title: 'Технологічність',
      text:
        'Коли ваш бренд в наших руках можете не хвилюватись. Адже немає невиконуваних завдань - є правильно підібрані технології',
    },
    {
      id: 3,
      title: 'Якість',
      text:
        'Фінальний продукт саме того кольору та розміру, без помилок, дефектів та зауважень, та ще й вчасно? Так, адже у         VRA якість понад усе!',
    },
    {
      id: 4,
      title: 'Індивідуальний підхід',
      text:
        'У нас немає клієнтів великих і малих, важливих чи не дуже. До кожного підходимо на рівні та по особливому, бо ви - це наша історія! \n',
    },
  ],

  howWeWork: [
    {
      id: 0,
      icon: '/img/HomePage/howWeWork/Vector1.svg',
      title: ' Вивчення та аналіз',
      description:[
        {id:0,title:'Бізнес-цілі'},
        {id:2,title:'Потреби користувача'},
        {id:3,title:'Завдання проєкту'},
      ],
    },
    {
      id: 1,
      icon: '/img/HomePage/howWeWork/Vector2.svg',
      title: 'Проектування та дизайн',
      description:[
        {id:1, title:'Розробка концепції'},
        {id:2, title:'Прототипи Створення та підготовка макетів'},
      ],
    },
    {
      id: 2,
      icon: '/img/HomePage/howWeWork/Vector3.svg',
      title: 'Погодження та виробництво',
      description:[
        {id:5, title:'Фінальні правки'},
        {id:2, title:'Виготовлення продукції'},
        {id:0, title:'Доставка'},
      ],
    },
  ],

  howWeWorkCard: [
    {
      title: 'Вивчаємо та аналізуємо',
      blockName1: 'Етап дослідження:',
      blockname2: 'Документи та матеріали, що надаються:',
      blockText1: [
        { id: 0, text: 'Зустріч з замовником (в офісі чи онлайн)' },
        { id: 1, text: 'Визначення мети та завдання проєкту' },
        { id: 2, text: 'Проведення воркшопів' },
      ],
      blockText2: [
        { id: 0, text: 'Вивчення бізнес-моделі' },
        { id: 1, text: 'Аналіз конкурентів (Google Spreadsheets) ' },
        { id: 2, text: 'Бізнес вимоги' },
        { id: 3, text: 'Функціональні вимоги до проєкту' },
      ],
    },
    {
      title: 'Проектування та дизайн',
      blockName1: 'Етап продукування ідей:',
      blockname2: 'Документи та матеріали, що надаються:',
      blockText1: [
        { id: 0, text: 'Розробка концепції' },
        { id: 1, text: 'Маркетингові застави' },
        { id: 2, text: 'Вимоги бренду (ґайдлайни)' },
        { id: 3, text: 'Систематизування інформації ' },
        { id: 4, text: 'Опис користувача' },
        { id: 5, text: 'Вироблення контексту та інсайтів' },
      ],
      blockText2: [
        {
          id: 0,
          text:
            'Генерація ідей та концепцій (Miro, Jamboard Прототипи Lo-fidelity для погодження (інструментарій Adobe)',
        },
        { id: 1, text: 'Воркшоп-презентація рішень (PDF) онлайн чи в офісі' },
      ],
    },

    {
      title: 'Створення та втілення',
      blockName1: 'Етап реалізації продукту:',
      blockname2: 'Документи та матеріали, що надаються:',
      blockText1: [{ id: 0, text: 'Виробництво продукту' }],
      blockText2: [
        { id: 0, text: 'Фінальні макети згідно з технічними вимогами для друку, пошиву тощо.' },
      ],
    },
  ],
};
