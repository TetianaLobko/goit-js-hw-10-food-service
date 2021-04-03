import menuCard from '../template/menu-element.hbs'
import menu from '../data/menu.json'

const containerMenuRef = document.querySelector('.js-menu');
const menuMarkup = createMenuMarkup(menu);

function createMenuMarkup(menu) {
    return menuCard(menu);
}

containerMenuRef.insertAdjacentHTML('beforeend', menuMarkup)

