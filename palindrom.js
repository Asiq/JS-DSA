/*
    Validate number as palindrome
*/

function isPalindrome(input) {
    if(input < 0) {
        return false;
    }
    return input === +input.toString().split("").reverse().join("");
}

const out1 = isPalindrome(10);

console.log(out1);

const out2 = isPalindrome(121);

console.log(out2);

/*
    Validate string as palindrome
*/

// function checkPalindrome(str) {
//     let len = str.length - 1;
  
//     for (let i = 0; i < len / 2; i++) {
//       if (str[i] !== str[len]) {
//         return 'Not a palindrome';
//       }
//       len--;
//     }
//     return 'Palindrome';
// }

function checkPalindrome(str) {
    let j = str.length - 1
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[j]) {
            return false;
        }
        j--;
    }
    return true;
}
  
console.log('is Palindrom :: ', checkPalindrome('madam'));

console.log('is Palindrom :: ', checkPalindrome('test'));
  

