import {aboutMe} from './src/view-controller/templateAboutMe.js';
import {homePage} from './src/view-controller/templateHome.js';
import {contactPage} from './src/view-controller/templateContact.js';
import {projectPage } from './src/view-controller/templateProyecto.js';

const changeTemplate = (hash) => {
  if(hash ==='#/about'|| hash ==='#/contact'||hash==='#/project'){
    return viewTemplate(hash);
  }else if (hash==='#/home'||hash===''||hash==='#'){
    return viewTemplate(hash);
  }
    
}

const viewTemplate = (routers) => {
 const router = routers.substr(2,routers.length -2);
 const main = document.getElementById('main');
 const nav = document.getElementById('nav');
 const root = document.getElementById('root');
 main.innerHTML= '';
 nav.innerHTML='';
 switch(router){
     case 'contact': 
     nav.appendChild(homePage());
     main.appendChild(contactPage());
     break;
     case 'about':
     nav.appendChild(homePage());
     main.appendChild(aboutMe());
     break;
     case 'home':
     main.appendChild(homePage());
     break;
     case 'project':
     nav.appendChild(homePage());
     main.appendChild(projectPage());
     break;
     default:
    nav.appendChild(homePage());
    
     break;
   }
 }

const initSiliconValley = () => {
 window.addEventListener('load', changeTemplate(window.location.hash));
 if (('onhashchange' in window)) window.onhashchange = () => changeTemplate(window.location.hash);
};

window.onload = initSiliconValley();
