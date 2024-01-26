const regexForName = /^[a-z ,.'-]+$/i;
const regexForPhone =
  /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/;
const regexForEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

const ValidatingName = (str) => {
  return regexForName.test(str);
};

const ValidatingPhone = (str) => {
  return regexForPhone.test(str);
};

const ValidatingEmail = (str) => {
  return regexForEmail.test(str);
};

export { ValidatingPhone, ValidatingEmail, ValidatingName };
