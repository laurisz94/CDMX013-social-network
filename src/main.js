// Este es el punto de entrada de tu aplicacion
import { Welcome } from './components/Welcome.js';

const root = document.getElementById('root');

const routes = {
  '/': Welcome,
};

const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  root.appendChild(routes[pathname]());
};

const component = routes[window.location.pathname];

root.appendChild(component());
