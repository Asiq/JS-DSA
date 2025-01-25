// Anagram check

// Method 1

function isAnagram(firstStr, secondStr) {
    var a = firstStr.toLowerCase();
    var b = secondStr.toLowerCase();

    
    a = a.split("").sort().join("");
    b = b.split("").sort().join("");

    return a === b;
}

console.log('Anagram :: ', isAnagram("Mary", "Army"));

function anagramCheck(s, t) {
    if(s.lenth !== t.lenth) {
        return false;
    }

    let obj1 = {};
    let obj2 = {};

    for (let i = 0; i < s.length; i++) {
        obj1[s[i]] = (obj1[s[i]] || 0) + 1;
        obj2[t[i]] = (obj2[t[i]] || 0) + 1;
    }

    for (const key in obj1) {
        if(obj1[key] !== obj2[key]) return false;
    }

    return true;

}

// console.log('Anagram check :: ', anagramCheck("anagram", "nagaram"));