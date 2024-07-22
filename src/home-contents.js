export { logo, description, hours };
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

function hours() {
    const element = document.createElement('div');
    element.classList.add('hours');
    
    const title = document.createElement('h2');
    title.innerHTML = 'Hours';

    const ul = document.createElement('ul');

    const monday = document.createElement('li');
    monday.innerHTML = 'Monday: Closed';

    const tuesday = document.createElement('li');
    tuesday.innerHTML = 'Tuesday: Closed';

    const wednesday = document.createElement('li');
    wednesday.innerHTML = 'Wednesday: 11:00am - 11:00pm';

    const thursday = document.createElement('li');
    thursday.innerHTML = 'Thursday: 11:00am - 11:00pm';

    const friday = document.createElement('li');
    friday.innerHTML = 'Friday: 11:00am - 1:00am';

    const saturday = document.createElement('li');
    saturday.innerHTML = 'Thursday: 11:00am - 1:00am';

    const sunday = document.createElement('li');
    sunday.innerHTML = 'Thursday: 11:00am - 11:00pm';

    element.appendChild(title);
    ul.appendChild(monday);
    ul.appendChild(tuesday);
    ul.appendChild(wednesday);
    ul.appendChild(thursday);
    ul.appendChild(friday);
    ul.appendChild(saturday);
    ul.appendChild(sunday);
    element.appendChild(ul);

    return element;
}


