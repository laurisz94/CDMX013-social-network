import { onNavigate } from '../main.js';

export const Feed = () => {
  const section = document.createElement('section');
  section.setAttribute('class', 'section');

  const figure = document.createElement('figure');
  const logoImg = document.createElement('img');
  logoImg.src = './images/logo-munchies.png';
  logoImg.setAttribute('id', 'logo');

  figure.append(logoImg);
  section.append(figure);

  return section;
};
