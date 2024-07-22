export { logo, description, contact };
import Logo from './Generic-Restaurant-Logo.jpg';

function logo() {
    const element = document.createElement('div');
    element.classList.add('restaurant-logo');

    const restaurantLogo = new Image();
    restaurantLogo.classList.add('logo');
    restaurantLogo.src = Logo;

    element.appendChild(restaurantLogo);

    return element;
}

function description() {
    const element = document.createElement('div');
    element.classList.add('description');

    const title = document.createElement('h2');
    title.innerHTML = 'Welcome';

    const paragraph = document.createElement('p');
    paragraph.innerHTML = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'

    element.appendChild(title);
    element.appendChild(paragraph);

    return element;
}

function contact() {
    const element = document.createElement('div');
    element.classList.add('contact');
    
    const title = document.createElement('h2');
    title.innerHTML = 'Contact Us';

    const ul = document.createElement('ul');

    const email = document.createElement('li');
    email.innerHTML = 'test@example.com';

    const number = document.createElement('li');
    number.innerHTML = '+614 00 000 000';

    const address = document.createElement('li');
    address.innerHTML = '1/201 Wallaby Way, Sydney NSW';

    element.appendChild(title);
    ul.appendChild(email);
    ul.appendChild(number);
    ul.appendChild(address);
    element.appendChild(ul);

    return element;
}


