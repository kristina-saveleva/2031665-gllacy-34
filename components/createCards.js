'use strict'
const initialCards = [
    {
        name: "Малинка",
        url: "images/catalog/raspberry.png",
        subtitle: "Сливочное мороженое с малиновым джемом",
        price: "310 ₽/кг",
        link: "raspberry"
    },
    {
        name: "Фисташка",
        url: "images/catalog/pistachio.png",
        subtitle: "Фисташковый пломбир с кусочками шоколада",
        price: "340 ₽/кг",
        link: "pistachio"
    },
    {
        name: "Черника",
        url: "images/catalog/blueberry.png",
        subtitle: "Крем-брюле с черничным джемом",
        price: "330 ₽/кг",
        link: "blueberry"
    },
    {
        name: "Бабл-гам",
        url: "images/catalog/bubble-gum.png",
        subtitle: "Ванильный пломбир со сладкой посыпкой",
        price: "320 ₽/кг",
        link: "bubble-gum"
    },
    {
        name: "Ежевика",
        url: "images/catalog/blackberry.png",
        subtitle: "Сливочное мороженое с ежевичным джемом",
        price: "330 ₽/кг",
        link: "blackberry"
    },
    {
        name: "Банан",
        url: "images/catalog/banana.png",
        subtitle: "Сливочный пломбир с банановым вкусом",
        price: "340 ₽/кг",
        link: "banana"
    },
    {
        name: "Шоколадка",
        url: "images/catalog/chocolate.png",
        subtitle: "Классический шоколадный пломбир",
        price: "370 ₽/кг",
        link: "chocolate"
    },
    {
        name: "Клубничка",
        url: "images/catalog/strawberry.png",
        subtitle: "Сливочный пломбир с клубничным вкусом",
        price: "370 ₽/кг",
        link: "strawberry"
    },
    {
        name: "Лимон",
        url: "images/catalog/lemon.png",
        subtitle: "Освежающий лимонный сорбет",
        price: "310 ₽/кг",
        link: "lemon"
    },
    {
        name: "Ментол",
        url: "images/catalog/menthol.png",
        subtitle: "Сливочный пломбир с ментоловым сиропом",
        price: "360 ₽/кг",
        link: "menthol"
    },
    {
        name: "Орешек",
        url: "images/catalog/nut.png",
        subtitle: "Фисташковый пломбир с шоколадным сиропом",
        price: "370 ₽/кг",
        link: "nut"
    },
    {
        name: "Крем-брюле",
        url: "images/catalog/creme-brulee.png",
        subtitle: "Классическое крем-брюле",
        price: "380 ₽/кг",
        link: "creme-brulee"
    }
];

const tenCardElements = [];
function addCardsOnPageFromLocalHost() {
    fetch("http://localhost:3001/products")
        .then(response => response.json())
        .then(data => renderCards(data))
        .catch(
            error => {
                console.error(error);
                renderCards(initialCards);
            }
        );
}

function renderCards(cards = tenCardElements) {
    for (let i = 0; i < cards.length; i++) {
        renderCard(cards[i]);
    }
}

function renderCard({ name, url, subtitle, price, link }) {
    const placesContainer = document.querySelector(".products__catalog");
    const placeTemplate = document.querySelector("#products-list-template").content;
    const placeElement = placeTemplate.querySelector(".catalog-products__card").cloneNode(true);
    let linkUrl = placeElement.querySelector(".catalog-products__card-link");
    placeElement.querySelector(".catalog-products__card-title").textContent = name;
    placeElement.querySelector(".catalog-products__card-subtitle").textContent = subtitle;
    placeElement.querySelector(".products__catalog-image").src = url;
    placeElement.querySelector(".catalog-products__card-price").textContent = price;
    linkUrl.setAttribute("href", 'product.html?product=' + link);
    placesContainer.prepend(placeElement);
}

addCardsOnPageFromLocalHost();
