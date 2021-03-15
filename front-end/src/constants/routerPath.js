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

const footerNavbar = {
  aboutUs: [
    { id: 1, title: 'О нас', link: '/' },
    { id: 2, title: 'Книга предложений', link: '/' },
    { id: 3, title: 'Блок "Интересное"', link: '/' },
    { id: 4, title: 'Магазин ИС', link: '/' },
  ],
  work: [{ id: 1, title: 'В пиццерии', link: '/' }],
  partners: [
    { id: 1, title: 'Франшиза', link: '/' },
    { id: 2, title: 'Инвестиции', link: '/' },
    { id: 3, title: 'Поставщикам', link: '/' },
    { id: 4, title: 'Предложить помещение', link: '/' },
  ],
  interesting: [
    { id: 1, title: 'Почему мы готовим без перчаток?', link: '/' },
    { id: 2, title: 'Экскурсии и мастер-классы', link: '/' },
  ],
};

const profileMenu = {
  history: '/profile/history',
  address: '/profile/address',
  user: '/profile/user',
  addProduct: '/profile/add-product',
};

const ROUTER_PATH = { ...routers, navbar, profileMenu, footerNavbar };

export default ROUTER_PATH;
