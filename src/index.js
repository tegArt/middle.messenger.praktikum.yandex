import {sum} from './modules/sum';

const root = document.querySelector('#root');
root.textContent = sum(13, -2).toString();
