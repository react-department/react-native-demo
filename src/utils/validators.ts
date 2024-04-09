import * as yup from 'yup';

const PASSWORD_REG_EXP = /^(?=.*[\d\W])(?=.*[a-zA-Z])\S+$/;
export const NON_NUMBER_SYMBOLS_REGEXP = /[^0-9]/g;
export const EMAIL_REGEXP = /^(?!\+)[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
export const WEBSITE_REGEXP = /^(https?:\/\/)?([\w.-]+\.[a-zA-Z]+)?(\/\S*)?$/;
export const ONLY_NUMBERS_REGEXP = /^\d+$/;
export const LETTERS_REGEXP = /[a-zA-Z]/g;
export const PLUS_AND_NUMBERS_REGEXP = /^\+\d+$/;
export const WHITESPACE = /\s/g;
export const PROTOCOL_REGEXP = /^(https?:\/\/)/;
export const TWITTER_LINK_REGEXP = /https?:\/\/(www\.)?twitter\.com\/([a-zA-Z0-9_.]+)/;
export const FACEBOOK_LINK_REGEXP = /https?:\/\/(www\.)?facebook\.com\/([a-zA-Z0-9_.]+)/;
export const INSTAGRAM_LINK_REGEXP = /https?:\/\/(www\.)?instagram\.com\/([a-zA-Z0-9_.]+)/;
export const HUDL_LINK_REGEXP = /(https?:\/\/)?(www\.)?hudl\.com\/profile\/([a-zA-Z0-9_.]+)/;
export const TIKTOK_LINK_REGEXP = /https?:\/\/(www\.)?tiktok\.com\/([a-zA-Z0-9_.]+)/;
export const YOUTUBE_LINK_REGEXP = /https?:\/\/(www\.)?youtube\.com\/([a-zA-Z0-9_.]+)/;
export const AMERICAN_PHONE_REGEXP = /^(\+1|1).*/;
export const AMERICAN_FULL_PHONE_REGEXP = (
  /^((\+1|1)?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/
);

const ALLOWED_ANY_SYMBOL = /^[^\s]$/;
export const PHONE_MASK = [
  ALLOWED_ANY_SYMBOL,
  ALLOWED_ANY_SYMBOL,
  ALLOWED_ANY_SYMBOL,
  ' ',
  ALLOWED_ANY_SYMBOL,
  ALLOWED_ANY_SYMBOL,
  ALLOWED_ANY_SYMBOL,
  ' ',
  ALLOWED_ANY_SYMBOL,
  ALLOWED_ANY_SYMBOL,
  ALLOWED_ANY_SYMBOL,
  ALLOWED_ANY_SYMBOL,
  ALLOWED_ANY_SYMBOL,
];
export const PHONE_WITH_COUNTRY_MASK = [ALLOWED_ANY_SYMBOL, ALLOWED_ANY_SYMBOL, ' ', ...PHONE_MASK];

export const SYMBOL_WITHOUT_AT_REGEX = /^[^\s@]+$/;
export const SYMBOL_AT_REGEX = /@/;

const passwordValidation = yup.string()
  .min(6, 'passwordMustBe')
  .max(20, 'passwordMustNotExceed')
  .matches(
    PASSWORD_REG_EXP,
    'passwordMustContain',
  )
  .required('passwordIsRequired');

// const nameValidation = yup.string()
//   .min(2, 'Name must be at least 2 characters')
//   .max(30, 'Name must not exceed 30 characters')
//   .required('Name is required');
//
// const emailValidation = yup.string()
//   .matches(
//     EMAIL_REGEXP,
//     'String must be email type',
//   )
//   .required('Email is required');
//
// const websiteValidation = yup.string()
//   .matches(
//     WEBSITE_REGEXP,
//     'String must be website type',
//   );

export const exampleSchema = yup.object({
  name: yup.string()
    .required(),
  current_password: passwordValidation,
  new_password: passwordValidation.test(
    'passwordsDontMatch',
    'newPasswordMustBeDifferent',
    function passwordsDontMatch(value) {
      return this.parent.currentPassword !== value;
    },
  ),
  confirm_password: passwordValidation.test(
    'passwordsMatch',
    'passwordsMustMatch',
    function passwordsMatch(value) {
      return this.parent.newPassword === value;
    },
  ),
});

export const isNumber = (value: string) => ONLY_NUMBERS_REGEXP.test(value) || PLUS_AND_NUMBERS_REGEXP.test(value);
