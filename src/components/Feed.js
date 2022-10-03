import { onNavigate, onAuthStateChangedFunction } from '../main.js';
import { addPost, getPost } from '../lib/posts.js';
import { singOutUser, auth } from '../lib/auth.js';

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
  buttonPost.setAttribute('value', '');

  const menu = document.createElement('nav');

  const iconHome = document.createElement('img');
  iconHome.src = './images/iconhome.png';
  iconHome.setAttribute('id', 'i-home');
  const iconLogout = document.createElement('img');
  iconLogout.src = './images/iconeoff.png';
  iconLogout.setAttribute('id', 'iconLogout');

  onAuthStateChangedFunction((user) => {
    const userDisplay = user.email;
    console.log(userDisplay);
    const userEmail = document.createElement('p');
    userEmail.setAttribute('class', 'userEmail');
    userEmail.textContent = `Hola! ${userDisplay}`;
    menu.append(userEmail);
  });

  formPost.addEventListener('submit', (e) => {
    e.preventDefault();
    if (textPost.value !== '') {
      addPost(textPost.value);
    }

    textPost.value = '';
  });

  sectionFeed.append(formPost);

  // let postsToShow = [];
  // const showPost = '';
  getPost((posts) => {
    // containerPost.innerHTML = '';
    // posts.forEach((post) => console.log('Current data: ', post.data().inputPost));
    posts.forEach((post) => {
      const containerPost = document.createElement('div');
      containerPost.setAttribute('class', 'containerPost');
      const allPost = post.data().inputPost;
      containerPost.textContent += allPost;
      sectionFeed.append(containerPost);
    });
  });

  iconLogout.addEventListener('click', () => {
    singOutUser().then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  });

  menu.append(iconHome, iconLogout);
  formPost.append(textPost, buttonPost);
  sectionFeed.append(menu);

  return sectionFeed;
};
