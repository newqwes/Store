import { INPUT_NAME, INPUT_TYPE, INPUT_PLACEHOLDER, INPUT_LABEL } from './input';
import ROUTER_PATH from './routerPath';

const AUTHENTICATION = {
  login: {
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
  },
  registration: {
    title: 'Регистрация',
    fields: [
      {
        name: INPUT_NAME.login,
        type: INPUT_TYPE.text,
        label: INPUT_LABEL.login,
        placeholder: INPUT_PLACEHOLDER.login,
      },
      {
        name: INPUT_NAME.email,
        type: INPUT_TYPE.text,
        label: INPUT_LABEL.email,
        placeholder: INPUT_PLACEHOLDER.email,
      },
      {
        name: INPUT_NAME.phone,
        type: INPUT_TYPE.phone,
        label: INPUT_LABEL.phone,
        placeholder: INPUT_PLACEHOLDER.phone,
      },
      {
        name: INPUT_NAME.password,
        type: INPUT_TYPE.password,
        label: INPUT_LABEL.password,
        placeholder: INPUT_PLACEHOLDER.password,
      },
      {
        name: INPUT_NAME.confirmPassword,
        type: INPUT_TYPE.password,
        label: INPUT_LABEL.password,
        placeholder: INPUT_PLACEHOLDER.confirmPassword,
      },
    ],
    buttonText: 'Регистрация',
    link: { route: ROUTER_PATH.login, text: 'Войти' },
  },
};

export default AUTHENTICATION;
