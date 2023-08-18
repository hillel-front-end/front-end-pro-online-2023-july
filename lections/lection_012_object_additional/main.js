// ---- Hash table -----

// array
// object

// --- hash table ---


var products = [
    { name: "sprite", price: 70 },
    { name: "cola", price: 82 },
    { name: "juice", price: 100 },
    { name: "cola", price: 82 },
    { name: "sprite", price: 50 },
    { name: "soda", price: 30 },
    { name: "fanta", price: 70 },
    { name: "soda", price: 70 },
    { name: "juice", price: 70 },
    { name: "sprite", price: 50 },
];

hasttable = {
    "sprite": 1
}

for(let i = 0; i < products.length; i++) {
    const product = products[i];
    let count;

    if (hasttable[product.name]) {
        count = hasttable[product.name] + 1;
    } else {
        count = 1
    }

    hasttable[product.name] = count
}

console.log(hasttable, 'hasttable');


/*
Створити ф-ю HOF 😜 cachebleProcess(cb) задача якого оптимізувати виклики ф-й з
    однаковими параметрами (наприклад для якихось обчислень) приклад:

    1 * 2 * 3

factorial(3) => 6

factorial(3) => 6


Приклад вище демонструє виклик ф-ї factorial з одним і тим самим параметром, тобто двічі виконалось обчислення одного і того самого.

Покращмо таку реалізацію, шляхом кешування обчислень, приклад:

const factorial = (n) => {
    ....
}

const memoFactorial = cachebleProcess(factorial);

memoFactorial(3) ⇒ calculate => 6

memoFactorial(3) =>	receive value from cache => 6

 */