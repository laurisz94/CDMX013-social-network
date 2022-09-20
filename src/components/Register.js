/* eslint-disable no-useless-escape */
/* eslint-disable max-len */
import { adduserWithEmail } from '../lib/auth.js';
import { onNavigate } from '../main.js';

export const Register = () => {
  //

  /* .addEvenListener(click (e) ) => {
    e.preventDefault
   const email = inputEmail.value
    const password= inputPassword.value */

  const div = document.createElement('div');
  div.setAttribute('class', 'secondLayout');

  const logoImg = document.createElement('img');
  logoImg.src = 'src/images/logo-munchies.png';
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

  const message1 = document.createElement('p');
  message1.setAttribute('class', 'message1');

  const message2 = document.createElement('p');
  message2.setAttribute('class', 'message1');

  const message3 = document.createElement('p');
  message3.setAttribute('class', 'message1');

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
  form.append(labelUser, inputUser, message2, labelMail, inputEmail, message1, labelPass, inputPass, message3, buttonRegister);

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log(inputPass.value);
    if (inputUser.value === '' && inputEmail.value === '' && inputPass.value === '') {
      message3.textContent = 'Please, fill in all fields';
    } else if (inputUser.value === '') {
      message2.textContent = 'Please, enter username';
    } else {
      adduserWithEmail(inputEmail.value, inputPass.value).then((userCredential) => {
      // Signed in
        console.log('siii ya te registraste welcome');
        const user = userCredential.user;
        // ...
        onNavigate('/feed');
      })
        .catch((error) => {
          console.log('nel no te puedes registrar');
          const errorCode = error.code;
          const errorMessage = error.message;

          const regexMatch = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail.value);
          if (!regexMatch) {
            message1.textContent = 'no válido';
          } else if (inputEmail.value === '') {
            message1.textContent = 'vacío';
          } else if (inputPass.value === '') {
            message3.textContent = 'vacío';
          } else if (inputPass.value.length < 6 && inputPass.value.length > 0) {
            message3.textContent = 'más de 6';
          }

          // ..
        });
    }
  });

  div.append(logoImg, form);

  return div;
};
