'use strict'
import {sliderForProduct} from './slikSlider.js'
let initialImage = [
    {
        name: "raspberry", subtitle: "Сливочное мороженое с малиновым джемом", price: "310 ₽/кг", images: ["images/product/raspberries1.jpeg","images/product/raspberries2.jpeg","images/product/raspberries3.jpeg"],
    },
    {
        name: "pistachio", subtitle: "Фисташковый пломбир с кусочками шоколада", price: "340 ₽/кг", images: ["images/catalog/pistachio.png", "images/catalog/pistachio.png", "images/catalog/blueberry.png"]
    },
    {
        name: "blueberry", subtitle: "Крем-брюле с черничным джемом", price: "330 ₽/кг", images: ["images/catalog/blueberry.png", "images/catalog/pistachio.png", "images/catalog/blueberry.png"]
    },
    {
        name: "bubble-gum", subtitle: "Ванильный пломбир со сладкой посыпкой", price: "320 ₽/кг", images: ["images/catalog/bubble-gum.png", "images/catalog/pistachio.png", "images/catalog/blueberry.png"]
    },
    {
        name: "blackberry", subtitle: "Сливочное мороженое с ежевичным джемом", price: "330 ₽/кг", images: ["images/catalog/blackberry.png", "images/catalog/pistachio.png", "images/catalog/blueberry.png"]
    },
    {
        name: "banana", subtitle: "Сливочный пломбир с банановым вкусом", price: "330 ₽/кг", images: ["images/catalog/banana.png", "images/catalog/pistachio.png", "images/catalog/blueberry.png"]
    },
    {
        name: "chocolate", subtitle: "Классический шоколадный пломбир", price: "330 ₽/кг", images: ["images/catalog/chocolate.png", "images/catalog/pistachio.png", "images/catalog/blueberry.png"]
    },
    {
        name: "strawberry", subtitle: "Сливочный пломбир с клубничным вкусом", price: "370 ₽/кг", images: ["images/catalog/strawberry.png", "images/catalog/pistachio.png", "images/catalog/blueberry.png"]
    },
    {
        name: "lemon", subtitle: "Освежающий лимонный сорбет", price: "310 ₽/кг", images: ["images/catalog/lemon.png", "images/catalog/pistachio.png", "images/catalog/blueberry.png"]
    },
    {
        name: "menthol", subtitle: "Сливочный пломбир с ментоловым сиропом", price: "360 ₽/кг", images: ["images/catalog/menthol.png", "images/catalog/pistachio.png", "images/catalog/blueberry.png"]
    },
    {
        name: "nut", subtitle: "Фисташковый пломбир с шоколадным сиропом", price: "370 ₽/кг", images: ["images/catalog/nut.png", "images/catalog/pistachio.png", "images/catalog/blueberry.png"]
    },
    {
        name: "creme-brulee", subtitle: "Классическое крем-брюле", price: "380 ₽/кг", images: ["images/catalog/creme-brulee.png", "images/catalog/pistachio.png", "images/catalog/blueberry.png"]
    }
];

const productTemplate = document.querySelector("#product-template").content;
const iceCreamImageContainer = document.querySelector(".ice-cream");

function getUrlParam() {
    const urlParams = new URLSearchParams(window.location.search);
    const iceCreamParam = urlParams.get('product');
    return iceCreamParam
}

let elemArray = initialImage.filter(function (iceCream) {
    return iceCream.name === getUrlParam();
});

let found = elemArray.find(e => e);
let imagesArr = Object.values(found.images);

function addProductOnPageFromLocalHost(name) {
    fetch("http://localhost:3001/product?name=" + name)
        .then(response => response.json())
        .then(data => renderProduct(data.images))
        .catch(
            error => {
                console.error(error);
                renderProduct(initialImage);
            }
        );
};

function renderProduct({  }) {
    console.log('это должно быть первым')
    const productElement = productTemplate.querySelector(".ice-cream__main-image-wrapper").cloneNode(true);
    const productList = productTemplate.querySelector(".ice-cream__image").cloneNode(true);
    productElement.querySelector(".ice-cream__main-image1").src = imagesArr[0];
    productElement.querySelector(".ice-cream__main-image2").src = imagesArr[1];
    productElement.querySelector(".ice-cream__main-image3").src = imagesArr[2];
    productList.querySelector(".ice-cream__image1").src = imagesArr[0];
    productList.querySelector(".ice-cream__image2").src = imagesArr[1];
    productList.querySelector(".ice-cream__image3").src = imagesArr[2];
    iceCreamImageContainer.prepend(productList);
    iceCreamImageContainer.prepend(productElement);
    sliderForProduct();
}

addProductOnPageFromLocalHost(getUrlParam());
