import { onNavigate, onAuthStateChangedFunction } from '../main.js';
import {
  addPost, getPost, deletePost, editPost,
} from '../lib/posts.js';
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

  const header = document.createElement('header');
  header.setAttribute('id', 'menu');

  const iconHome = document.createElement('img');
  iconHome.src = './images/iconhome.png';
  iconHome.setAttribute('id', 'i-home');
  const iconLogout = document.createElement('img');
  iconLogout.src = './images/iconeoff.png';
  iconLogout.setAttribute('id', 'iconLogout');

  const alertConfirm = document.createElement('dialog');
  alertConfirm.setAttribute('id', 'alert-confirm');

  const textConfirm = document.createElement('p');
  textConfirm.setAttribute('id', 'text-confirm');

  const containerButtons = document.createElement('div');
  containerButtons.setAttribute('id', 'container-delete');

  const buttonConfirm = document.createElement('button');
  buttonConfirm.setAttribute('id', 'btn-confirm');

  const buttonCancel = document.createElement('button');
  buttonCancel.setAttribute('id', 'btn-cancel');

  textConfirm.textContent = 'Delete Post?';
  buttonConfirm.textContent = 'Delete';
  buttonCancel.textContent = 'Cancel';

  const paragraphDelete = document.createElement('p');
  paragraphDelete.setAttribute('id', 'paragraph-delete');

  paragraphDelete.textContent = 'This can\'t be undone, your post will be removed.';

  const editDialog = document.createElement('dialog');
  editDialog.setAttribute('id', 'edit-dialog');

  const editTextPost = document.createElement('input');
  editTextPost.setAttribute('id', 'edit-text-post');
  const containerEditButtons = document.createElement('div');
  containerEditButtons.setAttribute('id', 'container-edit-buttons');
  const submitEditButton = document.createElement('input');
  submitEditButton.setAttribute('type', 'submit');
  submitEditButton.setAttribute('id', 'submit-edit');
  submitEditButton.setAttribute('value', 'Edit');
  const buttonCancelEdit = document.createElement('button');
  buttonCancelEdit.setAttribute('id', 'btn-cancel-edit');
  buttonCancelEdit.textContent = 'Cancel';
  containerEditButtons.append(submitEditButton, buttonCancelEdit);
  editDialog.append(editTextPost, containerEditButtons);

  onAuthStateChangedFunction((user) => {
    const userDisplay = user.email;
    const userEmail = document.createElement('p');
    userEmail.setAttribute('class', 'userEmail');
    userEmail.textContent = `¡Hi, ${userDisplay}!`;
    header.append(iconHome, userEmail, iconLogout);
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
          // iconErase.dataset.postId = post.id;

          const containerIcons = document.createElement('div');
          const iconEdit = document.createElement('img');
          iconEdit.src = './images/iconoeditar.png';
          iconEdit.setAttribute('class', 'icons-edit');

          containerIcons.append(iconEdit, iconErase);
          containerPost.append(containerIcons);

          iconErase.addEventListener('click', () => {
            alertConfirm.showModal();
            // deletePost(e.target.dataset.postId);
            // deletePost(post.id);
            buttonConfirm.addEventListener('click', () => {
              deletePost(post.id);
              alertConfirm.close();
            });

            buttonCancel.addEventListener('click', () => {
              alertConfirm.close();
            });
          });

          iconEdit.addEventListener('click', () => {
            editDialog.showModal();
            editTextPost.value = allPost;
            submitEditButton.addEventListener('click', () => {
              if (editTextPost.value !== '') {
                editPost(post.id, editTextPost.value);
                editDialog.close();
              }
            });
            buttonCancelEdit.addEventListener('click', () => {
              editDialog.close();
            });
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
  alertConfirm.append(textConfirm, paragraphDelete, containerButtons);
  containerButtons.append(buttonConfirm, buttonCancel);
  sectionFeed.append(alertConfirm, editDialog, header);

  return sectionFeed;
};
