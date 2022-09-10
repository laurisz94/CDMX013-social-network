export const Welcome = () => {
  const div = document.createElement('div');
  div.setAttribute('class', 'div');
  
  const logoImg = document.createElement('img');
  logoImg.src = './images/logo-munchies.png'
  logoImg.setAttribute('id', 'logo');
  
  const buttonLogin = document.createElement('button');
  buttonLogin.setAttribute('id', 'buttonLogin');
  const buttonRegister = document.createElement('button');
  buttonRegister.setAttribute('id', 'buttonRegister');

  buttonLogin.textContent = 'SIGN IN';
  buttonRegister.textContent = 'CREATE ACCOUNT';
  div.append(logoImg, buttonLogin, buttonRegister);

  return div;
};
