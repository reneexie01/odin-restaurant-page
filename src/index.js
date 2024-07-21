import './style.css';
import { logo, description, contact } from './page-contents.js';

console.log("hello world!");

const div = document.querySelector('#content');

div.appendChild(logo());

div.appendChild(description());

div.appendChild(contact());
