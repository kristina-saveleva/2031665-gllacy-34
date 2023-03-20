'use strict'
import { sliderForProduct } from './slikSlider.js'
import { buttonsCheck } from './basket.js'

let initialImage = [
    {
        name: "raspberry", subtitle: "Сливочное мороженое с малиновым джемом", price: "310 ₽/кг", images: ["images/product/raspberries1.jpeg","images/product/raspberries2.jpeg","images/product/raspberries3.jpeg"],
    },
    {
        name: "pistachio", subtitle: "Фисташковый пломбир с кусочками шоколада", price: "340 ₽/кг", images: ["images/product/pistachio1.jpeg","images/product/pistachio2.jpeg","images/product/pistachio3.jpeg"],
    },
    {
        name: "blueberry", subtitle: "Крем-брюле с черничным джемом", price: "330 ₽/кг", images: ["images/product/blueberry1.jpeg","images/product/blueberry2.jpeg","images/product/blueberry3.jpeg"],
    },
    {
        name: "bubble-gum", subtitle: "Ванильный пломбир со сладкой посыпкой", price: "320 ₽/кг", images: ["images/product/bubblegum1.webp","images/product/bubblegum2.jpeg","images/product/bubblegum3.jpeg"],
    },
    {
        name: "blackberry", subtitle: "Сливочное мороженое с ежевичным джемом", price: "330 ₽/кг", images: ["images/product/blackberry1.jpeg","images/product/blackberry2.jpeg","images/product/blackberry3.jpeg"],
    },
    {
        name: "banana", subtitle: "Сливочный пломбир с банановым вкусом", price: "330 ₽/кг", images: ["images/product/banana1.jpeg","images/product/banana2.jpeg","images/product/banana3.webp"],
    },
    {
        name: "chocolate", subtitle: "Классический шоколадный пломбир", price: "330 ₽/кг", images: ["images/product/chocolate1.jpeg","images/product/chocolate2.jpeg","images/product/chocolate3.jpeg"],
    },
    {
        name: "strawberry", subtitle: "Сливочный пломбир с клубничным вкусом", price: "370 ₽/кг", images: ["images/product/strawberry1.jpeg","images/product/strawberry2.jpeg","images/product/strawberry3.jpeg"],
    },
    {
        name: "lemon", subtitle: "Освежающий лимонный сорбет", price: "310 ₽/кг", images: ["images/product/lemon1.jpeg","images/product/lemon2.webp","images/product/lemon3.jpeg"],
    },
    {
        name: "menthol", subtitle: "Сливочный пломбир с ментоловым сиропом", price: "360 ₽/кг", images: ["images/product/mentol1.jpeg","images/product/mentol2.webp","images/product/mentol3.jpeg"],
    },
    {
        name: "nut", subtitle: "Фисташковый пломбир с шоколадным сиропом", price: "370 ₽/кг", images: ["images/product/pista-chocol1.jpeg","images/product/pista-chocol2.jpeg","images/product/pista-chocol3.jpeg"],
    },
    {
        name: "creme-brulee", subtitle: "Классическое крем-брюле", price: "380 ₽/кг", images: ["images/product/cream-brule1.jpeg","images/product/cream-brule2.jpeg","images/product/cream-brule3.jpeg"]
    }
];

const productTemplate = document.querySelector("#product-template").content;
const iceCreamImageContainer = document.querySelector(".ice-cream");

function getUrlParam() {
    const urlParams = new URLSearchParams(window.location.search);
    const iceCreamParam = urlParams.get('product');
    return iceCreamParam
}

let parametr = getUrlParam();

let elemArray = initialImage.filter(function (iceCream) {
    return iceCream.name === parametr;
});

let found = elemArray.find(e => e);

function addProductOnPageFromLocalHost(name) {
    fetch("http://localhost:3001/product?name=" + name)
        .then((response) => response.json())
        .then(data => renderProduct(data))
        .catch(
            error => {
                console.error(error);
                renderProduct(found);
            }
        );
};

function renderProduct({ images, subtitle, price }) {
    const productBox = productTemplate.querySelector('.ice-cream').cloneNode(true);
    productBox.querySelector(".ice-cream__title").textContent = subtitle;
    productBox.querySelector(".ice-cream__price").textContent = price;
    productBox.querySelector(".ice-cream__main-image1").src = images[0];
    productBox.querySelector(".ice-cream__main-image2").src = images[1];
    productBox.querySelector(".ice-cream__main-image3").src = images[2];
    productBox.querySelector(".ice-cream__image1").src = images[0];
    productBox.querySelector(".ice-cream__image2").src = images[1];
    productBox.querySelector(".ice-cream__image3").src = images[2];
    iceCreamImageContainer.prepend(productBox);
    sliderForProduct();
    buttonsCheck();
}

addProductOnPageFromLocalHost(parametr);
