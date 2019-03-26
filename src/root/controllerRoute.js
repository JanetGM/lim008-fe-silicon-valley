import{aboutMe} from '../view-controller/templateAboutMe';
import{contacPage} from '../view-controller/templateContact';
import{homePage} from '../view-controller/templateHome';
import {} from '../view-controller/templateProyecto';


const changeTmp = (hash) => {
      if ((hash === '#/signin' || hash === '#/signup')) {
        return viewTmp(hash);
    } else {
      if (hash === '#/' || hash === '' || hash === '#' || hash === '#/signin' || hash === '#/signup') {
        window.location.hash = '';
        return viewTmp('#/home');
      } else if (hash === '#/home' || hash === '#/privatePost' || hash === '#/publicPost') {
        return viewTmp(hash);
      }
    }
  };
  
  const viewTmp = (routers) => {
    const router = routers.substr(2, routers.length - 2);
    const main = document.getElementById('main');
    const root = document.getElementById('root');
    const navBar = document.getElementById('nav');
    root.innerHTML = '';
    navBar.innerHTML = '';
    main.innerHTML = '';
    switch (router) {
    case 'home':
     homePage();
    break;
    }
}
