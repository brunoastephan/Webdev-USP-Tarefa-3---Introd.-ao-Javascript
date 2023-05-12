function add(first, second) {   /* adição de dois números */
    let sum;
    sum = first + second;
    return sum;
}

function sub(first, second) { /* subtração de dois números */
    let sub;
    sub = first - second;
    return sub;
}

function mul(first, second) { /* multiplicação de dois números */
    let mul;
    mul = first * second;
    return mul;
}

function div(first, second) { /* divisão de dois números */
    let div;
    div = first / second;
    return div;
}

function is_even(number) { /* verificação de que um número é par */
    let is_even = false;
    if (number % 2 == 0) {
        is_even = true;
    }
    return is_even;
}