function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b !== 0 ? a / b : 'Error: Division by zero';
        default:
            return 'Error: Invalid operator';
    }
}


const context = {};


const result = calculate.apply(context, [2, 3, '+']);

console.log(result); 
