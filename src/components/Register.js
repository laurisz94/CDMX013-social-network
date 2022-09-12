import { onNavigate } from '../main.js';

export const Register = () => {
  const div = document.createElement('div');
  div.setAttribute('class', 'div');

  const logoImg = document.createElement('img');
  logoImg.src = './images/logo-munchies.png';
  logoImg.setAttribute('id', 'logo-small');

  const form = document.createElement('form');
  const labelUser = document.createElement('label');
  const labelMail = document.createElement('label');
  const labelPass = document.createElement('label');

  labelUser.setAttribute('class', 'label');
  labelMail.setAttribute('class', 'label');
  labelPass.setAttribute('class', 'label');

  const inputUser = document.createElement('input');
  inputUser.setAttribute('class', 'input');

  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('class', 'input');

  const inputPass = document.createElement('input');
  inputPass.setAttribute('class', 'input');
  inputPass.setAttribute('type', 'password');

  const buttonRegister = document.createElement('input');
  buttonRegister.setAttribute('type', 'submit');
  buttonRegister.setAttribute('id', 'submitRegister');
  buttonRegister.setAttribute('value', 'CREATE ACCOUNT');

  inputUser.setAttribute('id', 'inputUser');
  inputEmail.setAttribute('id', 'inputMail');
  inputPass.setAttribute('id', 'inputPassword');

  labelUser.textContent = 'Username';
  labelMail.textContent = 'E-mail';
  labelPass.textContent = 'Password';
  buttonRegister.textContent = 'CREATE ACCOUNT';
  form.append(labelUser, inputUser, labelMail, inputEmail, labelPass, inputPass, buttonRegister);
  div.append(logoImg, form);

  return div;
};
