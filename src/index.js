import './style.css';
import { logo, description, hours } from './home-contents.js';
import { beverages, mains } from './menu-contents.js';

const div = document.querySelector('#content');

div.appendChild(logo());

div.appendChild(beverages());

div.appendChild(mains());

