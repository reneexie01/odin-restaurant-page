import './style.css';
import { logo, description, hours } from './home-contents.js';
import { beverages, mains, sides } from './menu-contents.js';
import { contact } from './contact-contents.js';

const div = document.querySelector('#content');

div.appendChild(logo());

div.appendChild(contact());


