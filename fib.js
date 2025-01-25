// fibonacci series

function fib(n) {
    if(n <= 1) {
        return n;
    }

    return fib(n-1) + fib(n-2);
}

console.log('Fibonacci :: ', fib(8));


function fibArray(n) {
    const arr = [0, 1];
    for (let i = 2; i <= n; i++) {
        arr.push(arr[i-1] + arr[i-2]);
    }

    return arr;
}

console.log('fib array :: ', fibArray(3));
