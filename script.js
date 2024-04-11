// 1)Найти сумму четных и нечетных чисел из массива и вывести разницу между ними. Вычесть из большего меньшее.
const first = [2,5,8,7,3,9,6,4];
let sumEven = 0;
let sumOdd = 0;
for (let i = 0; i < first.length; i++) {
    if(first[i] % 2 === 0) {
        sumEven += first[i];
    }
    
    if(first[i] % 2 !== 0) {
        sumOdd += first[i];
    }
}

if(sumEven > sumOdd){
    console.log(sumEven - sumOdd); // Если сума четных больше то вычесть с них нечетные
} else if(sumEven < sumOdd){
    console.log(sumOdd - sumEven); // Если сума нечетных больше то вычесть с них четные
} else {
    console.log(sumEven - sumOdd); // Если обе сумы равны
}

// 2)Пройдитесь циклом по массиву и выведите только те имена продуктов, у которых тип обувь.

const products = [
    {
        title: "Nike",
        price: 300,
        type: "shoes"
    },
    {
        title: "Puma",
        price: 400,
        type: "shoes"
    }, 
    {
        title: "BMW",
        price: 7000,
        type: "car"
    },
    {
        title: "Chanel",
        price: 1200,
        type: "perfume"
    }
];

for (let i = 0; i < products.length; i++) {
    if(products[i].type === "shoes") {
        console.log(products[i].title);
    }
}

// 3)создайте новый пустой массив. Пройдитесь циклом по массиву с продуктами и в новый массив добавьте те продукты, которые дешевле 1000.

let oneth = [];
for (let i = 0; i < products.length; i++) {
    if (products[i].price < 1000) {
        oneth += products[i];
    }
}

console.log(oneth);