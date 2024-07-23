import './style.css';
import { logo, description, hours } from './home-contents.js';
import { beverages, mains, sides } from './menu-contents.js';
import { contact } from './contact-contents.js';

const div = document.querySelector('#content');

const homeBtn = document.querySelector(".home-button");
const menuBtn = document.querySelector(".menu-button");
const contactBtn = document.querySelector(".contact-button");

div.appendChild(logo());
div.appendChild(description());
div.appendChild(hours());

homeBtn.addEventListener("click", () => {
    div.innerHTML = '';
    div.appendChild(logo());
    div.appendChild(description());
    div.appendChild(hours());
})

menuBtn.addEventListener("click", () => {
    div.innerHTML = '';
    div.appendChild(logo());
    div.appendChild(beverages());
    div.appendChild(mains());
    div.appendChild(sides());
})

contactBtn.addEventListener("click", () => {
    div.innerHTML = '';
    div.appendChild(logo());
    div.appendChild(contact());
})