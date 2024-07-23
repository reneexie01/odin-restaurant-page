export { contact };

function contact() {
    const element = document.createElement('div');
    element.classList.add('contact');

    const title = document.createElement('h2');
    title.innerHTML = 'Contact Us';

    const email = document.createElement('p');
    email.innerHTML = `<span class="email">Email: </span>bookings@restaurant.com`;

    const number = document.createElement('p');
    number.innerHTML = `<span class="number">Number: </span>+614 00 000 000`;

    const address = document.createElement('p');
    address.innerHTML = `<span class="address">Address: </span>210 Wallaby Way, Sydney NSW`;

    element.appendChild(title);

    element.appendChild(title);
    element.appendChild(email);
    element.appendChild(number);
    element.appendChild(address);

    return element;
}