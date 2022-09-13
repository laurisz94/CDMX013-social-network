import { onNavigate } from '../main.js';

export const Welcome = () => {
  const section = document.createElement('section');
  section.setAttribute('class', 'section');

  const figure = document.createElement('figure');
  const logoImg = document.createElement('img');
  logoImg.src = './images/logo-munchies.png';
  logoImg.setAttribute('id', 'logo');

  const buttonLogin = document.createElement('button');
  buttonLogin.setAttribute('id', 'buttonLogin');

  const buttonRegister = document.createElement('button');
  buttonRegister.setAttribute('id', 'buttonRegister');

  buttonLogin.textContent = 'SIGN IN';
  buttonRegister.textContent = 'CREATE ACCOUNT';

  buttonRegister.addEventListener('click', () => {
    onNavigate('/register');
  });

  figure.append(logoImg);
  section.append(figure, buttonRegister, buttonLogin);

  return section;
};
