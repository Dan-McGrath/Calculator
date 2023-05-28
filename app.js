

const add = (num1, num2) => {
    return (num1 + num2)
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
let value;

const getOperator = (e) => {
    if(operator !== undefined && secondDigit !== undefined) {
        operate(digit, operator, secondDigit);
    }
    digit = current.textContent;
    operator = e.target.dataset.operation;
    symbol = e.target.textContent
    expression.textContent = `${current.textContent} ${symbol}`;
}

const getNumber = (e) => {
    if (operator === undefined && digit === undefined) {
        digit = e.target.dataset.number;
        value = e.target.dataset.number;
        current.textContent = value;
    } else if (digit !== undefined && operator === undefined) {
        digit = digit + e.target.dataset.number;
        value = digit
        current.textContent = value;
    } else if (secondDigit === undefined) {
        secondDigit = e.target.dataset.number;
        value = e.target.dataset.number;
        current.textContent = value;
    } else {
        secondDigit = secondDigit + e.target.dataset.number;
        value = secondDigit
        current.textContent = value;
    }

}


const operate = (num1, operator, num2) => {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    if (operator === '+') {
        value = add(num1, num2);
        current.textContent = value;        
        secondDigit = undefined;
    } else if(operator === '-') {
        value = subtract(num1, num2);
        current.textContent = value;
        secondDigit = undefined;
    } else if(operator === 'x') {        
        value = multiply(num1, num2);
        current.textContent = value;
        secondDigit = undefined;
    } else if(operator === '/') {
        value = divide(num1, num2);
        current.textContent = value
        secondDigit = undefined;
    } 
}

//Equal

const evaluate = () => {
    if(operator !== undefined && secondDigit !== undefined) {
        expression.textContent = `${digit} ${operator} ${secondDigit} =`
        operate(digit, operator, secondDigit);
    } else {
        return
    }
}

const equalBtn = document.querySelector('.equals');
equalBtn.addEventListener('click', evaluate);

//event listeners for main btns

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

//Clear

const clearBttn = document.querySelector('.clear')

const clear = () => {
    digit = undefined;
    secondDigit = undefined;
    operator = undefined;
    current.textContent = 0;
    expression.textContent = '';
}

clearBttn.addEventListener('click', clear);


//Back
const back = () => {
    newValue = value.slice(0,-1);
    value = newValue
    current.textContent = value;
    if (operator === undefined) {
        digit = newValue;
    } else {
        secondDigit = newValue;
    }
}

const backBtn = document.querySelector('.back');
backBtn.addEventListener('click', back)

addClickNumber();
addClickOperator(); 