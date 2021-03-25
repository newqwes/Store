const routers = {
  products: {
    main: '/products',
    pizza: '/products?type=pizza',
    salad: '/products?type=salad',
    drink: '/products?type=drink',
    sauce: '/products?type=sauce',
    chicken: '/products?type=chicken',
  },
  main: '/',
  cart: '/cart',
  order: '/order',
  login: '/login',
  profile: '/profile',
  password: '/profile/password',
  contacts: '/contacts',
  cartSubmit: '/cart_submit',
  registration: '/registration',
  orderSuccessMessage: '/order_success_message',
};

const navbar = [
  { id: 1, title: 'Пицца', link: routers.products.pizza },
  { id: 2, title: 'Курица', link: routers.products.chicken },
  { id: 3, title: 'Салаты', link: routers.products.salad },
  { id: 4, title: 'Напитки', link: routers.products.drink },
  { id: 5, title: 'Соусы', link: routers.products.sauce },
  { id: 6, title: 'Контакты', link: routers.contacts },
];

const profileMenu = {
  history: '/profile/history',
  address: '/profile/address',
  user: '/profile/user',
  addProduct: '/profile/add-product',
};

const footerNavbar = {
  aboutUs: {
    menuTitle: 'Магазин Пиццы',
    items: [
      { id: 1, title: 'О нас', link: '/' },
      { id: 2, title: 'Книга предложений', link: '/' },
      { id: 3, title: 'Блок "Интересное"', link: '/' },
      { id: 4, title: 'Магазин ИС', link: '/' },
    ],
  },
  work: { menuTitle: 'Работа', items: [{ id: 1, title: 'В пиццерии', link: '/' }] },

  partners: {
    menuTitle: 'Партнерам',
    items: [
      { id: 1, title: 'Франшиза', link: '/' },
      { id: 2, title: 'Инвестиции', link: '/' },
      { id: 3, title: 'Поставщикам', link: '/' },
      { id: 4, title: 'Предложить помещение', link: '/' },
    ],
  },

  interesting: {
    menuTitle: 'Это интересно',
    items: [
      { id: 1, title: 'Почему мы готовим без перчаток?', link: '/' },
      { id: 2, title: 'Экскурсии и мастер-классы', link: '/' },
    ],
  },

  contacts: {
    menuTitle: 'Связаться с нами',
    items: [
      { id: 1, title: '+375 (33) 363-79-70', href: 'tel:+375333637970' },
      { id: 2, title: 'pizzastore@mail.ru', href: 'mailto:pizzastore@mail.ru' },
    ],
  },
};

const ROUTER_PATH = { ...routers, navbar, profileMenu, footerNavbar };

export default ROUTER_PATH;
