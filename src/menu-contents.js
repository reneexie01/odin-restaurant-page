export { beverages, mains, sides };

function beverages() {
    const element = document.createElement('div');
    element.classList.add('beverages');

    const title = document.createElement('h2');
    title.innerHTML = 'Alcoholic and Non-Alcoholic Beverages';

    const beer = document.createElement('h3');
    beer.innerHTML = 'Beer - $12.50';
    const beerDescription = document.createElement('p');
    beerDescription.innerHTML = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'

    const wine = document.createElement('h3');
    wine.innerHTML = 'Wine - $16.90';
    const wineDescription = document.createElement('p');
    wineDescription.innerHTML = 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'

    const cocktails = document.createElement('h3');
    cocktails.innerHTML = 'Cocktails - $22.50';
    const cocktailsDescription = document.createElement('p');
    cocktailsDescription.innerHTML = 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'

    const soda = document.createElement('h3');
    soda.innerHTML = 'Soda - $9.90';
    const sodaDescription = document.createElement('p');
    sodaDescription.innerHTML = 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'

    element.appendChild(title);

    element.appendChild(beer);
    element.appendChild(beerDescription);

    element.appendChild(wine);
    element.appendChild(wineDescription);

    element.appendChild(cocktails);
    element.appendChild(cocktailsDescription);

    element.appendChild(soda);
    element.appendChild(sodaDescription);

    return element;
}

function mains() {
    const element = document.createElement('div');
    element.classList.add('mains');
    
    const title = document.createElement('h2');
    title.innerHTML = 'Mains';

    const pasta = document.createElement('h3');
    pasta.innerHTML = 'Pasta - $22.10';
    const pastaDescription = document.createElement('p');
    pastaDescription.innerHTML = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'

    const steak = document.createElement('h3');
    steak.innerHTML = 'Steak - $27.50';
    const steakDescription = document.createElement('p');
    steakDescription.innerHTML = 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'

    const pizza = document.createElement('h3');
    pizza.innerHTML = 'Pizza - $24.00';
    const pizzaDescription = document.createElement('p');
    pizzaDescription.innerHTML = 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'

    const fish = document.createElement('h3');
    fish.innerHTML = 'Fish - $29.90';
    const fishDescription = document.createElement('p');
    fishDescription.innerHTML = 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'

    element.appendChild(title);

    element.appendChild(pasta);
    element.appendChild(pastaDescription);

    element.appendChild(steak);
    element.appendChild(steakDescription);

    element.appendChild(pizza);
    element.appendChild(pizzaDescription);

    element.appendChild(fish);
    element.appendChild(fishDescription);


    return element;
}

function sides() {
    const element = document.createElement('div');
    element.classList.add('sides');
    
    const title = document.createElement('h2');
    title.innerHTML = 'Sides';

    const salad = document.createElement('h3');
    salad.innerHTML = 'Salad - $12.50';
    const saladDescription = document.createElement('p');
    saladDescription.innerHTML = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'

    const wedges = document.createElement('h3');
    wedges.innerHTML = 'Wedges - $16.00';
    const wedgesDescription = document.createElement('p');
    wedgesDescription.innerHTML = 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'

    const steamedVeg = document.createElement('h3');
    steamedVeg.innerHTML = 'Steamed Vegetables - $14.50';
    const steamedVegDescription = document.createElement('p');
    steamedVegDescription.innerHTML = 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'

    const friedCalamari = document.createElement('h3');
    friedCalamari.innerHTML = 'Fried Calamari - $21.00';
    const friedCalamariDescription = document.createElement('p');
    friedCalamariDescription.innerHTML = 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'

    element.appendChild(title);

    element.appendChild(salad);
    element.appendChild(saladDescription);

    element.appendChild(wedges);
    element.appendChild(wedgesDescription);

    element.appendChild(steamedVeg);
    element.appendChild(steamedVegDescription);

    element.appendChild(friedCalamari);
    element.appendChild(friedCalamariDescription);


    return element;
}