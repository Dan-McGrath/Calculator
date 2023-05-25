

const add = (num1, num2) => {
    
    return num1 + num2
}

const subtract = (num1, num2) => {
    return num1 - num2
}

const multiply = (num1, num2) => {
    return num1 * num2
}

const divide = (num1, num2) => {
    if (num2 === 0) {
        alert('Cannot divide by 0')
    }
    answer = (num1 / num2);
    if(num1 % num2 === 0) {
        return answer
    }
    return answer.toFixed(5);
    
}
const current = document.querySelector('.current');
const expression = document.querySelector('.expression');
let operator;
let digit;
let secondDigit;

const getOperator = (e) => {
    if(operator !== undefined) {
        digit = parseInt(current.textContent); 
    }
    
    operator = e.target.dataset.operation;
    expression.textContent = `${current.textContent} ${operator}`;
    return operator
}

const getNumber = (e) => {
    if (operator === undefined) {
        digit = parseInt(e.target.dataset.number);
        current.textContent = digit;
    } else if (secondDigit == undefined) {
        secondDigit = parseInt(e.target.dataset.number);
        operate(digit, operator, secondDigit)
    } else {
        digit = parseInt(e.target.dataset.number);
        operate(digit, operator, secondDigit)
    }

}






const operate = (num1, operator, num2) => {
    if (operator === '+') {
        current.textContent = add(num1, num2);
        secondDigit = undefined;
    } else if(operator === '-') {
        current.textContent = subtract(num1, num2);
        secondDigit = undefined;
    } else if(operator === 'x') {
        current.textContent = multiply(num1, num2);
        secondDigit = undefined;
    } else if(operator === '/') {
        current.textContent = divide(num1, num2);
        secondDigit = undefined;
    } else if(operator === '=') {
        return num1
    }
}





const number = document.querySelectorAll('.number');
const operation = document.querySelectorAll('.operation');

const addClickOperator = () => {
    for (let i = 0; i < operation.length; i++) {
        operation[i].addEventListener('click', getOperator) 
    }
    
}
const addClickNumber = () => {
    for(let i = 0; i < number.length; i++) {
        number[i].addEventListener('click', getNumber)
    }
}

addClickNumber();
addClickOperator();