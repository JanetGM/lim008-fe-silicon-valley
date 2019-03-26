export const homePage = () => {
    const  sectionHome =document.createElement('section');
    sectionHome.classList.add('homePage');
    const tempSectionHome =
    ` <div class = "container-nav">
        <div>
        <div class="bordes">
       <img  ID="menu"src="https://img.icons8.com/material-sharp/24/000000/menu.png" class="img-icon">
       <label class="title">PROYECTOS</label> 
       </div>
        <img  id ="close" src="https://img.icons8.com/material-sharp/24/000000/menu.png" class="img-icon hidden">
        </div>
      </div>
      <div>
      <nav id="nav-menu" style="display:none">
        <li><a href="#/home">Home</li>
        <li><a href= "#/about">Acerca de mí</a></li>
        <li><a href="#/contact">Contacto</a></li>
        <li><a href="#/project">Proyectos</a></li>
        </nav>
      </div>
      <div>
       
        <div><img src="img/mobile/funcionamientoCipher.PNG" class="img-style"></div>
        <div id ="bottleup">
          <label>Bottle Up</label>
          <p class="parrafo">"bottle up" esta diseñado para mejorar la seguridad de informacion de la marina de guerra del Perú puede ser usado por el personal de alto mando y personal Subalterno , puesto que es de conocimiento publico que se ha tenido casos de espias infiltrados y para resguardar la información "Botlle up " es la solución.</p>
        </div>
        <div id ="wikilol">
        <div><img src="img/mobile/wikilol.PNG" class="img-style"></div>
          <label>WikiLol</label>
          <p class="parrafo"> "WikiLol" es una página que permite a los jugadores de LOL encontrar información detallada de sus campeones como :Cuales son los más fuertes contamos con un Top Ten,Los tipos de campeones que existen,Los datos específicos de cada campeón,Cuánto aumentar el poder de ataque cuando avanza su nivel.</p>
        </div>
        <div><img src="img/mobile/ayni.PNG" class="img-style"></div>
        <div id ="ayni">
          <label>Ayni</label>
          <p class ="parrafo">Ayni es la primera red social peruana que busca unir emprendedores, colaboradores y voluntarios para potenciar el alcance de sus proyectos de manera gratuita.

          En Ayni podras publicar contenido de interés para la comunidad, podrás conocer los proyectos de emprendimiento con valor social más relevantes de nuestro país.</p>
        </div>
        <div></div>
        <div id ="mdlinks">
          <label>Mdlinks</label>
          <p class="parrafo">Esta es una librería desarrollada con Javascript y node.js , la cual nos permite visualizar el nombre,la dirección de los links de un archivo de formato MD. (Markdown)</p>
        </div>
      <div>
    `;
     sectionHome.innerHTML = tempSectionHome;
     const menu = sectionHome.querySelector('#menu');
     menu.addEventListener('click',() => {
       const nav = sectionHome.querySelector('#nav-menu');
       nav.style.display="block";

     })
     return sectionHome;
}
