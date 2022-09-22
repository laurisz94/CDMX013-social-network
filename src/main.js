// Este es el punto de entrada de tu aplicacion
import { Welcome } from './components/Welcome.js';
import { Register } from './components/Register.js';
import { Feed } from './components/Feed.js';
import { Login } from './components/Login.js';

const root = document.getElementById('root');

const routes = {
  '/': Welcome,
  '/register': Register,
  '/feed': Feed,
  '/login': Login,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  root.removeChild(root.firstChild);
  root.appendChild(routes[pathname]());
};

const component = routes[window.location.pathname];

window.onpopstate = () => {
  root.removeChild(root.firstChild);
  root.append(routes[window.location.pathname]());
};

root.appendChild(component());
