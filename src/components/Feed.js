import { onNavigate } from '../main.js';

export const Feed = () => {
  const sectionFeed = document.createElement('section');
  sectionFeed.setAttribute('class', 'section-feed');
  
  const textPost = document.createElement('input');
  textPost.setAttribute('class', 'textPost');

  const containerPost = document.createElement('div');
  containerPost.setAttribute('class', 'containerPost');

  const menu = document.createElement('nav');

  const iconHome = document.createElement('img');
  iconHome.src = './images/iconhome.png';
  const iconLogout = document.createElement('img');
  iconLogout.src = './images/iconeoff.png';

  menu.append(iconHome, iconLogout);
  sectionFeed.append(textPost, containerPost, menu);

  return sectionFeed;
};
