//función para mostrar un elemento

const showElement = (id) =>{
    const getElement = document.getElementById(id);
    getElement.style.display='block';
}
//

const menuToggle = document.getElementById('menu-toggle');
const menuNav = document.getElementById('menu-nav');
menuToggle.addEventListener('click',()=>{
    showElement('tr');

})