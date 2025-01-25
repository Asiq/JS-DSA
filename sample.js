// function test(a,b) {
//     if(b == 0) {
//         return a;
//     }
//     return test(b, a % b);
// }

// const res = test(100, 2000);

// console.log(res);

// console.log('100 % 2000 :: ' , 100 % 2000)

// console.log('2000 % 100 :: ' , 2000 % 100)

function calculateAge(birthYear) {
    console.log(' current year :: ', new Date().getFullYear());
    return new Date().getFullYear() - birthYear;
}
console.log(`You are ${calculateAge(1989)} years old`);