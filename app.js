

const add = (num1, num2) => {
    let answer = (num1 + num2);
    if (num1 % 1 === 0 || num2 % 1 === 0) {
        answer = +(num1 * num2).toFixed(5)
        return answer;
    }
    
    return answer
}

const subtract = (num1, num2) => {
    let answer = (num1 - num2);
    if (num1 % 1 === 0 || num2 % 1 === 0) {
        answer = +(num1 * num2).toFixed(5)
        return answer;
    }
    return answer
 
}

const multiply = (num1, num2) => {
    let answer;
    if (num1 % 1 === 0 || num2 % 1 === 0) {
        answer = +(num1 * num2).toFixed(5)
        return answer;
    }
    
    return answer
    

}

const divide = (num1, num2) => {
    if (num2 === 0) {
        alert('Cannot divide by 0')
    }
    let answer = (num1 / num2);
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
    float.dataset.active = 'false'
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
    } else if (secondDigit === undefined && operator !== undefined) {
        secondDigit = e.target.dataset.number;
        value = e.target.dataset.number;
        current.textContent = value;
    } else if (secondDigit !== undefined && operator !== undefined) {
        secondDigit = secondDigit + e.target.dataset.number;
        value = secondDigit
        current.textContent = value;
    }

}


const operate = (num1, operator, num2) => {
    if (num1 % 1 === 0 && num2 % 1 === 0){
        num1 = parseInt(num1);
        num2 = parseInt(num2);
    } else {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
    }
    
    if (operator === '+') {
        value = add(num1, num2);
        current.textContent = value;        
        secondDigit = undefined;
        float.dataset.active = 'false'
    } else if(operator === '-') {
        value = subtract(num1, num2);
        current.textContent = value;
        secondDigit = undefined;
        float.dataset.active = 'false'
    } else if(operator === 'x') {        
        value = multiply(num1, num2);
        current.textContent = value;
        secondDigit = undefined;
        float.dataset.active = 'false'
    } else if(operator === '/') {
        value = divide(num1, num2);
        current.textContent = value
        secondDigit = undefined;
        float.dataset.active = 'false'
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
    float.dataset.active = 'false'
}

clearBttn.addEventListener('click', clear);


//Back
const back = () => {
    lastChar = value.slice(-1);
    newValue = value.slice(0,-1);
    if (lastChar === '.') {
        float.dataset.active = 'false'
    }
    value = newValue;
    current.textContent = value;
    if (operator !== undefined && digit !== undefined && secondDigit === undefined) {
        return
    }
    if (operator === undefined) {
        digit = newValue;
    } else {
        secondDigit = newValue;
    }
    
}

const backBtn = document.querySelector('.back');
backBtn.addEventListener('click', back)

// Decimal
const float = document.querySelector('.float')


const addFloat = (e) => {
    if (e.target.dataset.active === 'false') {
        current.textContent += '.'
        if (operator === undefined) {
            digit += '.'
        } else {
            secondDigit += '.'
        }
    }
    
    e.target.dataset.active='true';
}

float.addEventListener('click', addFloat)

addClickNumber();
addClickOperator(); 