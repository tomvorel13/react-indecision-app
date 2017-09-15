// const add = function(a, b) {
//     return a + b;
// }

// console.log(add(10, 10));

// const user = {
//     name: 'Tom',
//     cities: ['London', 'New York', 'Baltimore'],
//     printPlacesLived() {
//         const cityMessages = this.cities.map((city) => {
//             return this.name + ' has lived in ' + city;
//         });
//         return cityMessages;
//     }
// };

// console.log(user.printPlacesLived());

//Challenge
const multiplier = {
    numbers: [1, 2, 3, 4, 5],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}

console.log(multiplier.multiply());