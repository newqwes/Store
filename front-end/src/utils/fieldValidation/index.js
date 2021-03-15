import { rules, validation } from './rules';

const CONSTRAINTS = {
  minLength: 5,
  maxLength: 50,
};

const requiredRule = [
  {
    rule: rules.required,
    message: 'Обязателен для заполнения',
  },
];

const commonRules = [
  {
    rule: rules.maxCharacters(CONSTRAINTS.maxLength),
    message: `Не более ${CONSTRAINTS.maxLength} символов`,
  },
  {
    rule: rules.minCharacters(CONSTRAINTS.minLength),
    message: `Не меньше ${CONSTRAINTS.minLength} символов`,
  },
  ...requiredRule,
];

const equalRule = [
  {
    rule: rules.equal,
    message: 'Не совпадают',
  },
];

const emailRule = [
  {
    rule: rules.email,
    message: 'Неверный формат email',
  },
  ...commonRules,
];

export const emailValidation = validation(emailRule);

export const equalValidation = validation(equalRule);

export const cityValidation = validation(requiredRule);
export const homeValidation = validation(requiredRule);
export const streetValidation = validation(requiredRule);
export const apartmentValidation = validation(requiredRule);

export const phoneValidation = validation(commonRules);
export const loginValidation = validation(commonRules);
export const passwordValidation = validation(commonRules);
