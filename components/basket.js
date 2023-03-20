let basketButton = document.querySelectorAll('.products__catalog-trash');
let basketCount = document.querySelector('.basket-count');
let basketBox = document.querySelector('.icon__link')


export function buttonsCheck() {
    const btns = document.querySelectorAll('.count-arrow');

    btns.forEach(btn => {
        btn.addEventListener('click', function () {
            const direction = this.dataset.direction;
            const inp = this.parentElement.querySelector('.count-input');
            const currentValue = +inp.value;
            let newValue;

            if (direction === "plus") {
                newValue = currentValue + 1;

            } else {
                newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
            }

            inp.value = newValue;
        })
    })
}

let cart = {
    'Малинка': {
        "name": 'Малинка',
        "count": 2,
    },
    'Фисташка': {
        "name": 'Фисташка',
        "count": 2,
    },
    'Черника': {
        "name": 'Черника',
        "count": 2,
    },
    'Бабл-гам': {
        "name": 'Бабл-гам',
        "count": 2,
    }
};

document.onclick = event => {
    if (event.target.classList.contains('products__catalog-trash')) {
        plusFunction(event.target.dataset.id)
    }
}

const plusFunction = id => {
    cart[id]["count"]++;
    renderCart();
}

const renderCart = () => {
    console.log(cart)
}

renderCart();

function sum(obj) {
    let sum = 0;
    for (let key in obj) {
        sum += obj[key]["count"];
    }
    return sum;
}

basketButton.forEach(function (btn) {
    btn.addEventListener('click', function (obj) {
        let newCount = Number(sum(cart))
        if (newCount > 0) {
            console.log('я больше нуля')
            newCount.remove
        } else {
            console.log('я меньше нуля')
        }
        basketCount.append(newCount)
        console.log(newCount);
    })
})
