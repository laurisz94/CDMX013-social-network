import { onNavigate, onAuthStateChangedFunction } from '../main.js';
import { addPost, getPost, deletePost } from '../lib/posts.js';
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
  const containerAllPost = document.createElement('div');
  containerAllPost.setAttribute('id', 'container-all-post');

  const menu = document.createElement('nav');

  const iconHome = document.createElement('img');
  iconHome.src = './images/iconhome.png';
  iconHome.setAttribute('id', 'i-home');
  const iconLogout = document.createElement('img');
  iconLogout.src = './images/iconeoff.png';
  iconLogout.setAttribute('id', 'iconLogout');

  onAuthStateChangedFunction((user) => {
    const userDisplay = user.email;
    // console.log(userDisplay);
    const userEmail = document.createElement('p');
    userEmail.setAttribute('class', 'userEmail');
    userEmail.textContent = `¡Hola, ${userDisplay}!`;
    menu.append(iconHome, userEmail, iconLogout);
  });

  sectionFeed.append(formPost, containerAllPost);

  getPost((posts) => {
    containerAllPost.innerHTML = '';
    // posts.forEach((post) => console.log('Current data: ', post.data().inputPost));
    posts.forEach((post) => {
      const containerPost = document.createElement('div');
      containerPost.setAttribute('class', 'containerPost');
      const allPost = post.data().inputPost;

      const labelUserPost = document.createElement('label');
      labelUserPost.setAttribute('class', 'label-user-post');
      labelUserPost.textContent = (post.data().userPost);
      // const emailUserPost = post.data().userPost;
      containerPost.textContent = allPost;

      onAuthStateChangedFunction((user) => {
        if (post.data().userPost === user.email) {
          const iconErase = document.createElement('img');
          iconErase.src = './images/iconoborrar.png';
          iconErase.setAttribute('class', 'icons-edit');
          //iconErase.dataset.postId = post.id;

          const containerIcons = document.createElement('div');
          const iconEdit = document.createElement('img');
          iconEdit.src = './images/iconoeditar.png';
          iconEdit.setAttribute('class', 'icons-edit');

          containerIcons.append(iconEdit, iconErase);
          containerPost.append(containerIcons);

          iconErase.addEventListener('click', (e) => {
            console.log('Borrar');
            //deletePost(e.target.dataset.postId);
            deletePost(post.id);
          });
        }
      });

      containerAllPost.append(containerPost, labelUserPost);
    });
  });

  formPost.addEventListener('submit', (e) => {
    e.preventDefault();
    if (textPost.value !== '') {
      onAuthStateChangedFunction((user) => {
        const userDisplay = user.email;
        addPost(textPost.value, userDisplay);
        textPost.value = '';
      });
    }

    // textPost.value = '';
  });

  iconHome.addEventListener('click', () => {
    window.scrollTo(0, 0);
  });

  iconLogout.addEventListener('click', () => {
    singOutUser().then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  });

  // menu.append(iconHome, iconLogout);
  formPost.append(textPost, buttonPost);
  sectionFeed.append(menu);

  console.log(Date.now());

  return sectionFeed;
};
