function calcul(action, n1, n2) {
    var res = 0;
    switch (action) {
        case "ce":
            res = 0;
            break;
        case "+":
            res = n1 + n2;
            break;
        case "-":
            res = n1 - n2;
            break;
        case "*":
            res = n1 * n2;
            break;
        case "/":
            res = n1 / n2;
            break;
        case "%":
            res = n1 % n2;
            break;
    }
    return res;
}

function equal() {
    
}
