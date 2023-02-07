
const tenCardElements = [];

fetch("http://localhost:3001/products")
.then(response => response.json())
.then(function createMarker(cards = tenCardElements) {
    for (let i = 0; i < cards.length; i++) {
      renderCard(cards[i]);
    }
})
.catch(error => console.error(error));




const initialCards = [
//     {
//         name: "Малинка",
//         link: "images/catalog/raspberry.png",
//         subtitle: "Сливочное мороженое с малиновым джемом",
//         price: "310 ₽/кг"
//     },
//     {
//         name: "Фисташка",
//         link: "images/catalog/pistachio.png",
//         subtitle: "Фисташковый пломбир с кусочками шоколада",
//         price: "340 ₽/кг"
//     },
//     {
//         name: "Черника",
//         link: "images/catalog/blueberry.png",
//         subtitle: "Крем-брюле с черничным джемом",
//         price: "330 ₽/кг"
//     },
//     {
//         name: "Бабл-гам",
//         link: "images/catalog/bubble-gum.png",
//         subtitle: "Ванильный пломбир со сладкой посыпкой",
//         price: "320 ₽/кг"
//     },
//     {
//         name: "Ежевика",
//         link: "images/catalog/blackberry.png",
//         subtitle: "Сливочное мороженое с ежевичным джемом",
//         price: "330 ₽/кг"
//     },
//     {
//         name: "Банан",
//         link: "images/catalog/banana.png",
//         subtitle: "Сливочный пломбир с банановым вкусом",
//         price: "340 ₽/кг"
//     },
//     {
//         name: "Шоколадка",
//         link: "images/catalog/chocolate.png",
//         subtitle: "Классический шоколадный пломбир",
//         price: "370 ₽/кг"
//     },
//     {
//         name: "Клубничка",
//         link: "images/catalog/strawberry.png",
//         subtitle: "Сливочный пломбир с клубничным вкусом",
//         price: "370 ₽/кг"
//     },
//     {
//         name: "Лимон",
//         link: "images/catalog/lemon.png",
//         subtitle: "Освежающий лимонный сорбет",
//         price: "310 ₽/кг"
//     },
//     {
//         name: "Ментол",
//         link: "images/catalog/menthol.png",
//         subtitle: "Сливочный пломбир с ментоловым сиропом",
//         price: "360 ₽/кг"
//     },
//     {
//         name: "Орешек",
//         link: "images/catalog/nut.png",
//         subtitle: "Фисташковый пломбир с шоколадным сиропом",
//         price: "370 ₽/кг"
//     },
//     {
//         name: "Крем-брюле",
//         link: "images/catalog/creme-brulee.png",
//         subtitle: "Классическое крем-брюле",
//         price: "380 ₽/кг"
//     }
];

const placesContainer = document.querySelector(".products__catalog");
const placeTemplate = document.querySelector("#products-template").content;

const placeInfo = initialCards.map(function (item) {
    return {
        name: item.name,
        link: item.link,
        subtitle: item.subtitle,
        price: item.price
    };
});

function render() {
    placeInfo.forEach(renderCard);
}

function renderCard({ name, link, subtitle, price }) {
    const placeElement = placeTemplate.querySelector(".catalog-products__card").cloneNode(true);
    placeElement.querySelector(".catalog-products__card-title").textContent = name;
    placeElement.querySelector(".catalog-products__card-subtitle").textContent = subtitle;
    placeElement.querySelector(".products__catalog-image").src = link;
    placeElement.querySelector(".catalog-products__card-price").textContent = price;

    placesContainer.prepend(placeElement);
}

render();
