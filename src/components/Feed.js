import { onNavigate } from '../main.js';

export const Feed = () => {
  const main = document.createElement('main');
  main.setAttribute('id', 'main');

  const section = document.createElement('section');
  section.setAttribute('class', 'section');

  const textPost = document.createElement('input');
  textPost.setAttribute('class', 'textPost');

  const containerPost = document.createElement('div');
  containerPost.setAttribute('class', 'containerPost');

  const menu = document.createElement('nav');

  const iconHome = document.createElement('img');
  iconHome.src = './images/iconhome.png';
  const iconLogout = document.createElement('img');
  iconLogout.src = './images/iconeoff.png';

  section.append(textPost, containerPost);
  menu.append(iconHome, iconLogout)
  main.append(section, menu);

  return main;
};
