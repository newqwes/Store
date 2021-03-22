import { INPUT_NAME, INPUT_TYPE, INPUT_PLACEHOLDER, INPUT_LABEL } from '../../constants/input';
import ROUTER_PATH from '../../constants/routerPath';

export const mockProductItem = {
  id: 1,
  name: 'Pizza',
  type: 'pizza',
  description: 'none description',
  photoUrl: 'https://image.com',
  unitSign: 'г',
  currencySign: 'руб.',
  options: [
    {
      id: 3,
      price: 24,
      weight: 250,
      productId: 1,
    },
  ],
};

export const mockAuthenticationForm = {
  title: 'Авторизация',
  fields: [
    {
      name: INPUT_NAME.email,
      type: INPUT_TYPE.text,
      label: INPUT_LABEL.email,
      placeholder: INPUT_PLACEHOLDER.email,
    },
    {
      name: INPUT_NAME.password,
      type: INPUT_TYPE.password,
      label: INPUT_LABEL.password,
      placeholder: INPUT_PLACEHOLDER.password,
    },
  ],
  buttonText: 'Войти',
  link: { route: ROUTER_PATH.registration, text: 'Регистрация' },
};
