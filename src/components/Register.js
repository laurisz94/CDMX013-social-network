/* eslint-disable no-useless-escape */
/* eslint-disable max-len */
import {
  adduserWithEmail, redirectResult, signInUserWithProviders, providerGithub, providerGoogle, providerTwitter,
} from '../lib/auth.js';
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
  logoImg.src = './images/logo-munchies.png';
  logoImg.setAttribute('id', 'logo-small');

  const form = document.createElement('form');
  // const labelUser = document.createElement('label');
  const labelMail = document.createElement('label');
  const labelPass = document.createElement('label');

  // labelUser.setAttribute('class', 'label');
  labelMail.setAttribute('class', 'label');
  labelPass.setAttribute('class', 'label');

  // const inputUser = document.createElement('input');
  // inputUser.setAttribute('class', 'input');

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

  const containerButtons = document.createElement('section');
  const textContinue = document.createElement('p');
  const buttonGoogle = document.createElement('button');
  const buttonGithub = document.createElement('button');
  const buttonTwitter = document.createElement('button');

  containerButtons.setAttribute('id', 'container-btns');
  textContinue.setAttribute('id', 'txt-continue');
  buttonGoogle.setAttribute('class', 'white-btns');
  buttonGoogle.setAttribute('id', 'white-btns1');
  const logoG = document.createElement('img');
  // logoG.src = './images/google.png';
  logoG.setAttribute('id', 'logo-google');
  buttonGithub.setAttribute('class', 'white-btns');
  buttonGithub.setAttribute('id', 'white-btns2');
  buttonTwitter.setAttribute('class', 'white-btns');
  buttonTwitter.setAttribute('id', 'white-btns3');

  // inputUser.setAttribute('id', 'inputUser');
  inputEmail.setAttribute('id', 'inputMail');
  inputPass.setAttribute('id', 'inputPassword');

  // labelUser.textContent = 'Username';
  labelMail.textContent = 'E-mail';
  labelPass.textContent = 'Password';
  buttonRegister.textContent = 'CREATE ACCOUNT';
  textContinue.textContent = 'Or continue with';
  buttonGoogle.textContent = 'Google';
  buttonGithub.textContent = 'Github';
  buttonTwitter.textContent = 'Twitter';
  form.append(message2, labelMail, inputEmail, message1, labelPass, inputPass, message3, buttonRegister);
  containerButtons.append(textContinue, buttonGoogle, buttonGithub, buttonTwitter);
  buttonGoogle.append(logoG);

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log(inputPass.value);
    if (inputEmail.value === '' && inputPass.value === '') {
      message3.textContent = 'Please, fill in all fields';
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

  buttonGoogle.addEventListener('click', (e) => {
    signInUserWithProviders(providerGoogle);

    redirectResult().then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      // The signed-in user info.
      const user = result.user;
    }).catch((error) => {
    // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    });

    onNavigate('/feed');
  });

  buttonGithub.addEventListener('click', (e) => {
    signInUserWithProviders(providerGithub);

    redirectResult().then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result);
      if (credential) {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const token = credential.accessToken;
        // ...
      }
  
      // The signed-in user info.
      const user = result.user;
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GithubAuthProvider.credentialFromError(error);
      // ...
    });

    onNavigate('/feed');
  });

  buttonTwitter.addEventListener('click', (e) => {
    signInUserWithProviders(providerTwitter);

    redirectResult().then((result) => {
      // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
      // You can use these server side with your app's credentials to access the Twitter API.
      const credential = TwitterAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const secret = credential.secret;
      // ...
  
      // The signed-in user info.
      const user = result.user;
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = TwitterAuthProvider.credentialFromError(error);
      // ...
    });

    onNavigate('/feed');
  });

  div.append(logoImg, form, containerButtons);

  return div;
};
