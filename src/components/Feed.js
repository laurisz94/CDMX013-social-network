import { onNavigate } from '../main.js';
import { addPost } from '../lib/posts.js';

export const Feed = () => {
  const sectionFeed = document.createElement('section');
  sectionFeed.setAttribute('class', 'section-feed');

  const formPost = document.createElement('form');

  const textPost = document.createElement('input');
  textPost.setAttribute('placeholder', 'Share your recipes...');
  textPost.setAttribute('class', 'textPost');

  const buttonPost = document.createElement('input');
  buttonPost.setAttribute('type', 'submit');
  buttonPost.setAttribute('id', 'button-post');

  const containerPost = document.createElement('div');
  containerPost.setAttribute('class', 'containerPost');

  const menu = document.createElement('nav');

  const iconHome = document.createElement('img');
  iconHome.src = './images/iconhome.png';
  const iconLogout = document.createElement('img');
  iconLogout.src = './images/iconeoff.png';

  textPost.textContent = 'enviar';

  menu.append(iconHome, iconLogout);
  formPost.append(textPost, buttonPost);
  sectionFeed.append(formPost, containerPost, menu);

  formPost.addEventListener('submit', (e) => {
    e.preventDefault();
    addPost(textPost.value);
    console.log(textPost);
  });

  return sectionFeed;
};
