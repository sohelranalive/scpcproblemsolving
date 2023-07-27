// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.


function simpleCalculator(num1, num2, symbol) {
    let result = ''
    switch (symbol) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '%':
            result = num1 % num2;
    }

    return result;
}

const result = simpleCalculator(12, 7, '/')
console.log(result);