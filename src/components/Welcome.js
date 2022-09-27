import { onNavigate } from '../main.js';

export const Welcome = () => {
  const sectionWelcome = document.createElement('section');
  sectionWelcome.setAttribute('class', 'sections-first-layouts');

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

  buttonLogin.addEventListener('click', () => {
    onNavigate('/login');
  });

  figure.append(logoImg);
  sectionWelcome.append(figure, buttonLogin, buttonRegister);

  return sectionWelcome;
};
